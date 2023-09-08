export default (req, res, next) => {
  if (req.url === "/apple-app-site-association") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        applinks: {
          apps: [],
          details: [
            {
              appID: "D4SZAZD4WL.com.egyptkey",
              paths: ["*"]
            }
          ]
        }
      })
    );
  }
  next();
};
