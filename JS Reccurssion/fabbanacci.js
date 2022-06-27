function fabb(first,second,count){
    if(count<=10){
        console.log(first)
        let c= first+second;
        return fabb(second,c,count+1)
    }
}
fabb(1,1,1)