const add=(a,b) => {
    return a+b;
}

export const tile_end_point=(req,res) =>{
    const {a,b} = req.params;
    const ans = add(a,b);
    res.send(ans);
}