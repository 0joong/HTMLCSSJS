window.onload = function () {//페이지 로드 후 호출
    

    const startBtn = document.querySelector("#startBtn");
    //startBtn요소를 찾아 변수 startBtn에 저장

    startBtn.addEventListener("click", function () {

        const numberInput = document.querySelector("#numberInput");
        //numberInput요소를 찾아서 numberInput에 저장

        
        if (numberInput.value == "") {// 입력 요소의 값이 비어 있는지 확인
            //비어 있으면 placeholder 값을 size 변수에 저장
            size = numberInput.placeholder;
        } else {
            size = numberInput.value;
        }
        console.log(size);

        const tableArea = document.querySelector(".tableArea");
        //tableArea요소를 찾아 변수에 저장

        //size의 값에 따라 행과 열의 개수가 결정
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>\n').repeat(size)
            + '</table>';
        
        // tableArea 요소의 내부 HTML을 테이블로 설정
        tableArea.innerHTML = cellHTML;

        const tds = document.querySelectorAll("td");
        // 모든 td 요소를 선택, 변수 tds에 저장

        let curLoc = Math.floor(Math.random() * size * size)
        tds[curLoc].style.backgroundColor = "violet";
        console.log(curLoc);

        window.onkeydown = function (event) {

            // 방향키만 처리
            if (event.keyCode < 37 || event.keyCode > 40) return;

            tds[curLoc].style.backgroundColor = "white";

            let row = Math.floor(curLoc / size);
            let col = curLoc % size;

            switch (event.key) {
                case 'ArrowLeft':// 왼쪽 방향키를 눌렀을 때
                    // 현재 위치가 행의 첫 번째 열이 아니면 왼쪽으로 이동
                    // 첫 번째 열이면 행의 마지막 열로 이동
                    curLoc += (col > 0 ? -1 : size - 1);
                    break;
                case 'ArrowRight':

                    curLoc += (col < size - 1) ? 1 : -(size - 1);
                    break;
                case 'ArrowUp':

                    curLoc += (row > 0 ? -size : (size - 1) * size);
                    break;
                case 'ArrowDown':
                    curLoc += Number((row < size - 1) ? size : -(size - 1) * size);
                    break;
            }

            console.log(curLoc);

            // 업데이트된 위치의 셀 배경색을 보라색으로 변경
            tds[curLoc].style.backgroundColor = "violet";
        }
    });
}
