<template>
    <div class="commit-list-root">
        <div class="timeline-root">
            <div class="timeline-main">
                <template v-for="(item, idx) in flatList" :key="item.key">
                    <div class="timeline-row">
                        <!-- 左侧 dot + 动态线条 -->
                        <div class="timeline-rail-cell">
                            <div class="timeline-dot"></div>
                            <div v-if="idx < flatList.length - 1" class="timeline-line" ref="lineRefs"></div>
                        </div>

                        <!-- timeline 内容 -->
                        <div class="timeline-content-cell">
                            <div class="timeline-date-label">Commits on {{ item.date }}</div>
                            <div v-for="commit in item.commits" :key="commit.sha" class="commit-card">
                                <div class="commit-main">
                                    <div class="commit-message">
                                        <a :href="commit.html_url" target="_blank">{{ commit.commit.message }}</a>
                                    </div>
                                    <div class="commit-sha">
                                        <a :href="commit.html_url" target="_blank">{{ commit.sha.substring(0, 7) }}</a>
                                    </div>
                                </div>
                                <div class="commit-meta">
                                    <img v-if="commit.author?.avatar_url" :src="commit.author.avatar_url"
                                        class="commit-avatar" width="20" height="20" />
                                    <span class="commit-author">{{ commit.commit.author.name }}</span>
                                    <span class="commit-date">committed on {{ formatDate(commit.commit.author.date,
                                        true) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="page === 1">上一页</button>
            <span>第 {{ page }} / {{ totalPages }} 页</span>
            <button @click="nextPage" :disabled="page === totalPages">下一页</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, nextTick, computed } from 'vue'

const owner = 'ToTryEveryThing'
const repo = 'my-docs'

const lineRefs = ref([]) // 所有连线的 DOM 引用
const groupRefs = ref([]) // 所有内容组的 DOM 引用

const commits = ref([])
const page = ref(1)
const pageSize = 10
const totalPages = ref(1)

async function fetchCommits() {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=200`)
    commits.value = await res.json()
    totalPages.value = Math.ceil(commits.value.length / pageSize)
}

function updateLineHeights() {
    nextTick(() => {
        for (let i = 0; i < groupRefs.value.length - 1; i++) {
            const curr = groupRefs.value[i]
            const next = groupRefs.value[i + 1]
            const line = lineRefs.value[i]
            if (curr && next && line) {
                const currBottom = curr.getBoundingClientRect().bottom
                const nextTop = next.getBoundingClientRect().top
                const distance = nextTop - currBottom
                line.style.height = `${distance > 0 ? distance : 0}px`
            }
        }
    })
}

function formatDate(dateString, showTime = false) {
    const d = new Date(dateString)
    if (showTime) {
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    return d.toLocaleDateString()
}

// 分组并分页
const pagedGroups = computed(() => {
    const pageCommits = commits.value.slice((page.value - 1) * pageSize, page.value * pageSize)
    const groups = []
    let lastDate = ''
    let group = null
    for (const commit of pageCommits) {
        const date = formatDate(commit.commit.author.date, false)
        if (date !== lastDate) {
            group = { date, commits: [] }
            groups.push(group)
            lastDate = date
        }
        group.commits.push(commit)
    }
    return groups
})

// 将每组变成一个 item
const flatList = computed(() => {
    return pagedGroups.value.map(group => ({
        key: 'group-' + group.date,
        date: group.date,
        commits: group.commits
    }))
})

function prevPage() {
    if (page.value > 1) page.value--
}
function nextPage() {
    if (page.value < totalPages.value) page.value++
}

onMounted(() => {
    fetchCommits()
    updateLineHeights()
})

onUpdated(() => {
    updateLineHeights()
})
</script>

<style scoped>
.commit-list-root {
    margin: 32px auto;
    padding: 0 0 10px 0;
}

.commit-list-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #24292f;
    padding: 24px 36px 8px 36px;
    border-bottom: 1px solid #d0d7de;
    margin-bottom: 0;
}

.timeline-root {
    padding: 0 10px;
}

.timeline-main {
    display: flex;
    flex-direction: column;
}

.timeline-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.timeline-rail-cell {
    width: 26px;
    min-width: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
}

.timeline-dot {
    width: 10px;
    height: 10px;
    background: #1f883d;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #d0d7de;
    z-index: 2;
    margin-bottom: 4px;
}

.timeline-line {
    width: 3px;
    background: #d0d7de;
    flex-shrink: 0;
    transition: height 0.3s ease;
}


.timeline-content-cell {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
}

.timeline-date-label {
    font-size: 1.08rem;
    color: #57606a;
    font-weight: 600;
    margin: 20px 0 6px 0;
    padding-left: 8px;
    height: 38px;
    display: flex;
    align-items: center;
}

.commit-card {
    border: 1px solid #eaeef2;
    padding: 12px 20px 8px 20px;
    background: #fff;
    border-radius: 6px;
    margin-bottom: 10px;
    transition: box-shadow .15s;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.commit-card:hover {
    box-shadow: 0 2px 8px #b2bac222;
}

.commit-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.commit-message a {
    font-weight: 600;
    color: #0969da;
    text-decoration: none;
    font-size: 1.08rem;
}

.commit-message a:hover {
    text-decoration: underline;
}

.commit-sha a {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    color: #6e7781;
    border-radius: 3px;
    padding: 2px 6px;
    font-size: 0.98em;
    text-decoration: none;
}

.commit-sha a:hover {
    background: #d0d7de;
}

.commit-meta {
    display: flex;
    align-items: center;
    margin-top: 6px;
    font-size: 0.98em;
    color: #57606a;
}

.commit-avatar {
    border-radius: 50%;
    margin-right: 7px;
    border: 1px solid #d0d7de;
}

.commit-author {
    font-weight: 500;
    margin-right: 10px;
}

.commit-date {
    color: #8c959f;
    margin-left: 4px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 24px;
    font-size: 1rem;
}

.pagination button {
    background: #fff;
    color: #0969da;
    border: 1px solid #d0d7de;
    border-radius: 4px;
    padding: 6px 18px;
    font-size: 1rem;
    cursor: pointer;
    transition: background .15s, color .15s;
}

.pagination button:disabled {
    background: #f6f8fa;
    color: #b2bac2;
    cursor: not-allowed;
    border-color: #eaeef2;
}
</style>
