var casual_shoes = (function () {
    let $ele, $casual_shoes1, $dt;
    return {
        init(num) {
            $ele = document.querySelector('.casual_shoes');
            this.Add_thegoods(num);
            $casual_shoes1 = $ele.querySelectorAll('.casual_shoes1');
            $dt = document.querySelectorAll('#dtt');
            console.log($ele);
            this.event();
        },
        event() {
            const self = this;
            console.log(11);
            // $casual_shoes1.mouseenter(function(){
            //     $casual_shoes1.css("border","2px solid red");
            //   });
            for (let i = 0; i < $casual_shoes1.length; i++) {
                let $pp = $casual_shoes1[i];
                let $num = $dt[i];
                console.log($dt[i]);
                $pp.addEventListener('mouseenter', function () {
                    console.log(2);
                    // $pp.style.margin = '3px 8px';
                    $num.style.border = '1px solid #fff';
                    $pp.style.border = '2px solid red';
                },false)
                $pp.addEventListener('mouseleave', function () {
                    console.log(9);
                    // $pp.style.margin = '5px 10px';
                    $num.style.border = '1px solid #ccc';
                    $pp.style.border = '2px solid #fff';
                },false)
            }
        },
        Add_thegoods(num) {
            let str='';
            console.log($ele);
            let $code = `<dl class="casual_shoes1">
            <dt id="dtt">
            <a href="#" target="_blank">
            <img src="images/xie.jpg">
            </a>
            </dt>
            <dd>
            <a href="#" target="_blank">
            <ul>
            <li class="r2">adidas阿迪达斯男子板鞋透气休闲运动鞋AW3890</li>
            <li class="r1"><i class="price">￥249</i><i class="del_price">￥399</i><i
            class="buy_btn">立即抢购</i></li>
            </ul>
            </a>
            </dd>
            </dl>`;
            for (let i = 0; i < num; i++) {
               str+=$code;
            }
            console.log(str)
            $ele.innerHTML=str;
        }
    }
}())