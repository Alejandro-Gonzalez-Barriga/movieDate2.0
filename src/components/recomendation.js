var recommendation_eng = function(dataset,person,distance){

    var totals = {
        //you can avoid creating a setter function
        //like this in the object you found them
        //since it just check if the object has the property if not create
        //and add the value to it.
        //and  because of this setter that why a function property
        // is created in the dataset, when we transform them.
        setDefault:function(props,value){
            if(!this[props]){
                this[props] =0;
            }
this[props] += value;
        }
    },
        simsum = {
            setDefault:function(props,value){
                if(!this[props]){
                    this[props] =0;
                }

                this[props] += value;
            }
        },
        rank_lst =[];
for(var other in dataset){
if(other ===person) continue;
var similar = distance(dataset,person,other);

        if(similar <=0) continue;
for(var item in dataset[other]){
                if(!(item in dataset[person]) ||(dataset[person][item]==0)){
                 //the setter help to make this look nice.
                    totals.setDefault(item,dataset[other][item]*similar);
                    simsum.setDefault(item,similar);


                }

        }


    }

   for(var item in totals){
  //this what the setter function does
  //so we have to find a way to avoid the function in the object
        if(typeof totals[item] !="function"){

            var val = totals[item] / simsum[item];
            rank_lst.push({val:val,items:item});
       }
    }
    rank_lst.sort(function(a,b){
        return b.val < a.val ? -1 : b.val > a.val ?
        1 : b.val >= a.val ? 0 : NaN;
    });
    var recommend = [];
      for(var i in rank_lst){
        recommend.push(rank_lst[i].items);
     }
   return [rank_lst,recommend];
}
