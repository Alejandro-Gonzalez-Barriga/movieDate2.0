var euclid = Math.sqrt(Math.pow(3.5-2.5,2)+Math.pow(4.0-3.5,2));

var reuclid = 1/(1+euclid);

//calculate the euclidean distance btw two item
var euclidean_score  = function(dataset,p1,p2){

    var existp1p2 = {};//store item existing in both item
//if dataset is in p1 and p2
    //store it in as one
    for(var key in dataset[p1]){
        if(key in dataset[p2]){
            existp1p2[key] = 1
        }
if(len(existp1p2) ==0) return 0;//check if it has a data
var sum_of_euclidean_dist = [];//store the  euclidean distance

        //calculate the euclidean distance
        for(item in dataset[p1]){
            if(item in dataset[p2]){
                sum_of_euclidean_dist.push(Math.pow(dataset[p1] [item]-dataset[p2][item],2));
            }
}
        var sum=0;
        for(var i=0;i<sum_of_euclidean_dist.length;i++){
            sum +=sum_of_euclidean_dist[i]; //calculate the sum of the euclidean
        }
//since the sum will be small for familiar user
        // and larger for non-familiar user
        //we make it exist btwn 0 and 1
        var sum_sqrt = 1/(1 +Math.sqrt(sum));
    return sum_sqrt;
    }

}

var len  = function(obj){
    var len=0;
    for(var i in obj){
        len++
    }
    return len;
}

euclidean_score(dataset,"Lisa Rose","Jack Mathews");
//0.3405424265831667
