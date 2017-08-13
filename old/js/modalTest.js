
$(function(){

//モーダルウィンドウを出現させるクリックイベント
$("#modal-open").click( function(){
	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	//コンテンツをフェードインする
	$( "#modal-profile" ).fadeIn("slow");


	$( "#modal-profile-close" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
  		$('body').removeClass('modal-open'); // 1
  		$('.modal-backdrop').remove();       // 2
  		$('#modal-profile').fadeOut('slow'); 
	} ) ;

	//[#modal-close]をクリックしたら…
	$("#btn-request").click( function(){
		//コンテンツをセンタリングする
		centeringModalSyncer() ;

		//コンテンツをフェードインする
		$( "#modal-wait-approval" ).fadeIn('slow');

		//[#modal-close]をクリックしたら…
		$( "#modal-close" ).unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
	  		$('body').removeClass('modal-open'); // 1
	  		$('.modal-backdrop').remove();       // 2
	  		$('#modal-wait-approval').fadeOut('slow'); 
		} ) ;
	} ) ;
} ) ;


var count = 1;

$(".circle-tag").on('click', function(){
	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	if (count == 0){
		console.log(this);
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
		var cw = $( "#modal-profile" ).outerWidth();
		var ch = $( "#modal-profile" ).outerHeight();

		//センタリングを実行する
		$( "#modal-profile" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

} ) ;