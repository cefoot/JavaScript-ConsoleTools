// Downloading mp3 files from amazon music page (test on page 11.2021 https://music.amazon.de/recently/purchased)
//start index (from webpage)
var musicIdx = 1;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function download(){
	var itms = document.getElementsByTagName("music-image-row"); //get current list of songs (changes when scrolling)
	var itm = itms[0]
	for(var i = 0; i < itms.length; i++){
		if(itms[i].innerText.startsWith(""+musicIdx)){ //find desired song (text starts with index)
			itm = itms[i];
			break;
		}
	}
	console.log("Music:"+musicIdx);
	console.log(itm.attributes["primary-text"].value);
    itm.scrollIntoView(); //scroll song into view (eventually updates list in background)
	await sleep(500);
	itm.getElementsByTagName("music-button")[2].click(); // click menu button
	await sleep(500);
	document.getElementsByTagName("music-list-item")[4].click(); // click download button
	await sleep(500);
	document.getElementById("dialogButton1").click(); //click download direct button in dialog
	if(musicIdx<80){ // <-- end index (from webpage)
		setTimeout(download, 1000);
	}
	musicIdx++;
}
setTimeout(download, 500);
