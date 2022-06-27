function oneton(first,n){
     if(first<=n){
        console.log(first)
        return oneton(first+1,n)
     }
}
oneton(1,50)