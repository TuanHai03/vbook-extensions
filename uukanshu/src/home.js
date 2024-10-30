function execute() {
    return Response.success([
        { title: "總排行榜", input: "/top/allvisit", script: "gen.js" },
        { title: "總推薦榜", input: "/top/allvote", script: "gen.js" },
        { title: "月排行榜", input: "/top/monthvisit", script: "gen.js" },
        { title: "月推薦榜", input: "/top/monthvote", script: "gen.js" },
        { title: "周排行榜", input: "/top/weekvisi", script: "gen.js" },
        { title: "周推薦榜", input: "/top/weekvote", script: "gen.js" },
        { title: "最新入庫", input: "/top/postdate", script: "gen.js" },
        { title: "最近更新", input: "/top/lastupdate", script: "gen.js" },
        { title: "總收藏榜", input: "/top/goodnum", script: "gen.js" },
        { title: "Hoàn thành", input: "/quanben/", script: "rank.js" },
        
    ]);
}