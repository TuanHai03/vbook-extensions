function execute() {
    return Response.success([
        {title: "Ngày Cập Nhật", input: "recentDate", script: "gen.js"}, 
        {title: "Lượt xem ", input: "viewCount", script: "gen.js"},
        {title: "Lượt đánh giá", input: "evaluationScore", script: "gen.js"},
        {title: "Lượt theo dõi", input: "followerCount", script: "gen.js"},         
        {title: "Truyện Mới", input: "createdAt", script: "gen.js"},
    ]);
}