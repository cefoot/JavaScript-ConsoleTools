// Downloading mp3 files from amazon music page (test on page 11.2021 https://music.amazon.de/recently/purchased)
var btns = document.getElementsByTagName("music-image-row");
var musicIdx = 1;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function download(){
	var itms = document.getElementsByTagName("music-image-row");
	var itm = itms[0]
	for(var i = 0; i < itms.length; i++){
		if(itms[i].innerText.startsWith(""+musicIdx)){
			itm = itms[i];
			break;
		}
	}
	console.log("Music:"+musicIdx);
	console.log(itm.attributes["primary-text"].value);
    itm.scrollIntoView();
	await sleep(500);
	itm.getElementsByTagName("music-button")[2].click()
	await sleep(500);
	document.getElementsByTagName("music-list-item")[4].click()
	await sleep(500);
	document.getElementById("dialogButton1").click()
	if(musicIdx<80){
		setTimeout(download, 1000);
	}
	musicIdx++;
}
setTimeout(download, 500);
