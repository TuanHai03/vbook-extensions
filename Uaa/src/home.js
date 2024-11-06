function execute() {
    return Response.success([
        {title: "Trang Đầu", input: "/api/novel/app/novel/search?category=&excludeTags=&orderType=2", script: "updates.js"},
    ]);
}