var similar_user = function(dataset,person,num_user,distance){
var scores=[];
for(var others in dataset){
        if(others != person && typeof(dataset[others])!="function"){
            var val = distance(dataset,person,others)
            var p = others
            scores.push({val:val,p:p});
        }
    }
    scores.sort(function(a,b){
        return b.val < a.val ? -1 : b.val > a.val ? 1 : b.val >= a.val ? 0 : NaN;
    });
    var score=[];
    for(var i =0;i<num_user;i++){
        score.push(scores[i]);
    }

    similar_user(dataset,'Alex G',3,pearson_correlation);
//[ { val: 0.963795681875635, p: 'Gene Seymour' },
  { val: 0.7470178808339965, p: 'Lisa Rose' },
  { val: 0.66284898035987, p: 'Toby' } ]
