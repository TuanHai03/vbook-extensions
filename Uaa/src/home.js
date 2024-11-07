function execute() {
    return Response.success([
        {title: "小说首页", input: "/novel", script: "gener.js"},
        {title: "全部小说", input: "/novel/list", script: "updates.js"},
        {title: "小说排行榜", input: "/novel/rank", script: "updates.js"},
        {title: "热门小说", input: "/novel/hot", script: "updates.js"},
        {title: "最新上架小说", input: "/novel/new", script: "updates.js"},
        {title: "最新更新小说", input: "/novel/update", script: "updates.js"},
    ]);
}