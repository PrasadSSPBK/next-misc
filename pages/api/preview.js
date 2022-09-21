export default function handler(req,res){
    res.setPreviewData({})
    // res.end("PREVIEW MODE ENABLED")
    res.redirect(req.query.redirect)
}