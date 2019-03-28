var product_list = (function () {
    let $ele, $product_list1, $product_list2;
    return {
        init(num) {
            $ele = document.querySelector('.product_list');
            this.Add_thegoods(num);
            $product_list1 = $ele.querySelectorAll('.product_list1');
            $product_list2 = document.querySelectorAll('#product_list2');
            console.log($ele);
            this.event();
        },
        event() {
            const self = this;
            console.log(11);
            // $product_list1.mouseenter(function(){
            //     $product_list1.css("border","2px solid red");
            //   });
            for (let i = 0; i < $product_list1.length; i++) {
                let $pp = $product_list1[i];
                let $num = $product_list2[i];
                console.log($product_list2[i]);
                $pp.addEventListener('mouseenter', function () {
                    console.log(2);
                    // $pp.style.margin = '3px 8px';
                    $num.style.background = ' #fff';
                    $pp.style.background = '#fff';
                },false)
                $pp.addEventListener('mouseleave', function () {
                    console.log(9);
                    // $pp.style.margin = '5px 10px';
                    $num.style.background = '';
                    $pp.style.background = '';
                },false)
            }
        },
        Add_thegoods(num) {
            let str='';
            console.log($ele);
            let $code = ` <dl class="product_list1">
            <dt id="product_list2">
            <a href="detail.html">
            <img src="./images/images/7ea567c47a7009e4_210.jpg" alt="">
            </a>
            <div class="p-scroll">
            <span class="ps-prev disabled"><</span>
            <div class="ps-wrap">
            <ul>
            <li><a href="detail.html"><img src="./images/images/7ea567c47a7009e4_210.jpg" alt=""></a></li>
            <li><a href="detail.html"><img src="./images/images/7ea567c47a7009e4_210.jpg" alt=""></a></li>
            </ul>
            </div>
            <span class="ps-next">></span>
            </div>
            </dt>
            <dd>
            <a href="detail.html">
            <ul>
            <li class="r1">
            <i class="price">￥399.00</i>
            <i class="del_price">￥499.00</i>
            </li>
            <li class="r2"> neo阿迪达斯 休闲鞋 女 1号黑色+1号黑色+亮白</li>
            <li class="r3">已售出<i>68</i>件</li>
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