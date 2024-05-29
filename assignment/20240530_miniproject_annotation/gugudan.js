window.onload = function () {//window로드 후 실행
    const btnNode = document.querySelector("button");//첫번째 버튼 요소 선택
    btnNode.addEventListener("click", function() {//버튼에 이벤트리스너 추가

        const danNum = document.querySelector("#danInput").value; //danInput의 입력값을 가져옴
        console.log(danNum);
    
        document.querySelector("#danNumber").innerHTML = `${danNum}단`; // danNumber 요소의 내용을 입력된 단 번호로 변경
        
        const resultNode = document.querySelector("#result"); //result 요소를 선택
        let result = "";//결과 문자열
        for (let i = 1; i <= 9; i++) { 
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`; // 결과 문자열에 곱셈 결과를 추가, pad로 이쁘게 표시
        }
        
        resultNode.innerHTML = result; // result 요소의 innerHTML을 결과 문자열로 설정
        document.querySelector(".displayArea").style.display = "block"; // 클래스 선택자가 displayArea인 요소를 표시
    });
}