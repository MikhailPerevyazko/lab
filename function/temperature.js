module.exports ={
    time: (v, tn, tk, p)=>{
        let t;
        t = 0.00117 * v * (tk - tn)/p;
        return t.toFixed(2);
    },
    temperatura: (time, v, tn, p)=>{
        //console.log(time * 60 * 60)
        //console.log((time / (0.00117 * v)) * p + Number.parseInt(tn))
        return ((time / (0.00117 * v)) * p + Number.parseInt(tn))
    }
}