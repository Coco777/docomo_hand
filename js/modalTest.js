
$(function(){

//モーダルウィンドウを出現させるクリックイベント
$("#modal-open").click( function(){
	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	//コンテンツをフェードインする
	$( "#modal-content" ).modal('show');

	//[#modal-close]をクリックしたら…
	$( "#modal-close" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		  	console.log("modal closed.");
  			$('body').removeClass('modal-open'); // 1
  			$('.modal-backdrop').remove();       // 2
  			$('#modal-content').modal('hide'); 
	} ) ;

} ) ;

var count = 0;

$(".circle-tag").on('click', function(){
	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	if (count == 0){
		$(this).css({backgroundColor: "#cccccc",
       				color: "#000"})
        count=1;        
    }

    else{
    	$(this).css({backgroundColor: "#ffd700",
       				color: "#fff"})
        count=0;
    }

} ) ;

//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();

		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

} ) ;