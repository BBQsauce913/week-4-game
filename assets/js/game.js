$(document).ready(function(){

	var randomNumber = Math.floor(Math.random() * 750 + 220);

	$("#number").append(" " + randomNumber);

	console.log("random" + " " + randomNumber);

	var wins = 0;
	var losses = 0;
	var userTotal = 0;

	$("#wins").text("Meth Quotas Met: " + wins);
	$("#losses").text("Meth Quotas Missed: " + losses);

	var pic1Value = Math.floor(Math.random() * 100);
	var pic2Value = Math.floor(Math.random() * 50);
	var pic3Value = Math.floor(Math.random() * 100);
	var pic4Value = Math.floor(Math.random() * 50);

	console.log("pic1" + " " + pic1Value);
	console.log("pic2" + " " + pic2Value);
	console.log("pic3" + " " + pic3Value);
	console.log("pic4" + " " + pic4Value);

	function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      pic1Value= Math.floor(Math.random()*11+1);
      pic2Value= Math.floor(Math.random()*11+1);
      pic3Value= Math.floor(Math.random()*11+1);
      pic4Value= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#plug').text(userTotal);
      } 

     function walter(){
     	alert("Meth = Money, You Win!");
     		wins++;
     		$("#wins").text("Meth Quotas Met: " + wins);
     	reset();
     }

     function jesse(){
     	alert("You have been executed for not making your quota, You Loose!");
     	losses++;
     	$("#losses").text("Meth Quotas Missed: " + losses);
     	reset();
     }

		$("#pic1").on("click", function(){
			userTotal = userTotal + pic1Value;
			console.log("New userTotal" + " " + userTotal);
			$("#plug").text(userTotal);
			if (userTotal === randomNumber){
				walter()
			} else if (userTotal > randomNumber){
				jesse();
			}
		})

		$("#pic2").on("click", function(){
			userTotal = userTotal + pic2Value;
			console.log("New userTotal" + " " + userTotal);
			$("#plug").text(userTotal);
			if (userTotal === randomNumber){
				walter()
			} else if (userTotal > randomNumber){
				jesse();
			}
		})		
		$("#pic3").on("click", function(){
			userTotal = userTotal + pic3Value;
			console.log("New userTotal" + " " + userTotal);
			$("#plug").text(userTotal);
				if (userTotal === randomNumber){
					walter()
				} else if (userTotal > randomNumber){
					jesse();
				}
		})
		$("#pic4").on("click", function(){
			userTotal = userTotal + pic4Value;
			console.log("New userTotal" + " " + userTotal);
			$("#plug").text(userTotal);
				if (userTotal === randomNumber){
					walter()
				} else if (userTotal > randomNumber){
					jesse();
				}
		})
})