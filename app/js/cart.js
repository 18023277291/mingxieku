$(function () {
    $('.menumy').on('mouseenter', function () {
        $('.wddd').css("display", "block")
        $('.jf').css("display", "block")
    })
    $('.menumy').on('mouseleave', function () {
        $('.wddd').css("display", "none")
        $('.jf').css("display", "none")
    })
    $('.menu-b').on('mouseenter', function () {
        $('.sh').css("display", "block")
        $('.zx').css("display", "block")
    })
    $('.menu-b').on('mouseleave', function () {
        $('.sh').css("display", "none")
        $('.zx').css("display", "none")
    })
    $('.his').on('mouseenter', function () {
        $('.zjll').css("display", "block")
        $('.gdsp').css("display", "block")
    })
    $('.his').on('mouseleave', function () {
        $('.zjll').css("display", "none")
        $('.gdsp').css("display", "none")
    })
})
var shopList = (function () {
    var $box
    return {
        init($el) {
            $box = $($el)
            this.event();
            this.getshopData();
        },
        event() {
            var _this = this;
            
            $box.on('click','.numadd',function(){
                var self = $(this)
                //获取盒子点击删除
                //获取数量
                // var num = $('.num').val()
                var num = self.prev().val();
                console.log(self.prev())
                num++;
                self.prev().val(num);
                // console.log(self.find('.sum-n'))
                var n = num;
                var s = self.parents('.didi').siblings('.n-price').html()
                self.parents('.didi').siblings('.sum-n').html(`${n*s}`);

            })
            $box.on('click','.numdel',function(){
                var self = $(this)
                //获取数量
                
                var num = self.next().val()
                if(num == 0){
                    return false
                }
                num--;
                self.next().val(num);
                var n = num;
                var s = self.parents('.didi').siblings('.n-price').html()
                self.parents('.didi').siblings('.sum-n').html(`${n*s}`);
            })
            $box.on('click','.delete_a',function(){
                $(this).parents('.maxbox_q').remove()
            })
        },
        //获取商品数据
        getshopData() {
            $.get('json/cart.json', (data) => {
                this.insertData(data)
            });
        },
        //添加到购物车的数据
        setCarData() {

        },
        insertData({data}) {
            data.forEach(x => {
                console.log(x)
                var htmlTemplate =
                    `<div class="maxbox_q" div-id='${x.id}'>
                    <div id="product_items" class="cart_tb_body c666">
                <table border="0" cellspacing="0" cellpadding="0" width="100%">
                    <colgroup>
                        <col class="span-155">
                        <col>
                        <col class="span-156">
                        <col class="span-156">
                        <col class="span-156">
                        <col class="span-156">
                        <col class="span-156">
                        <col class="span-156">
                    </colgroup>
                    <tbody>
                        <tr class="product-items" number="1" brand="New Balance" cat_name="卫衣"
                            urlupdate="//www.s.cn/cart-g-114968@588683@na-updateCart.html"
                            urlremove="//www.s.cn/cart-g-removeCart.html"
                            goods_name="NewBalance-NB 新款男装卫衣运动服运动休闲AMT64606-BK FP" goods_id="114968" price="239.00"
                            sale_price="239" pmt_price="239.00">
                            <td> <span class="pic cart-product-img"
                                    isrc="${x.img}"
                                    ghref="//www.s.cn/newbalance-AMT64606-BK.html"><a
                                        href="//www.s.cn/newbalance-AMT64606-BK.html" target="_blank"
                                        style="border: 0px;"><img
                                            src="${x.img}" width="50"
                                            height="50" style="cursor: pointer;"></a></span> </td>
                            <td style="width:323px;height:82px">
                                <span class="p_info">
                                    <a href="//www.s.cn/newbalance-AMT64606-BK.html" target="_blank">
                                        ${x.name}
                                        <i>(&nbsp;${x.cm}&nbsp;)</i>
                                    </a>
                                </span>
                            </td>
                            <td style="width:90px;height:81px">0</td>
                            <td class="f_yh n-price" style="width:90px;height:81px">${x.price}</td>
                            <td class="didi" style="width:90px;height:81px"> 
                                <span class="numbox">
                                     <span class="numdel"></span>
                                         <input type="text" name="cartNum[g][114968-588683-na]" class="num"onchange="Cart.ItemNumUpdate(this,this.value,event);" value="1">
                                        <span class="numadd"></span>
                                </span>
                            </td>
                            <td class="f_yh" style="width:90px;height:81px"> - </td>
                            <td class="f_yh sum-n" style="width:90px;height:81px"> ${x.price} </td>
                            <td style="width:90px;height:81px"> <a class="Fav_g" onclick="Cart,*goods_id="114968">收藏</a> <br>
                             <a class="delete_a">删除</a> </td>
                        </tr>
                    </tbody>
                </table>
                <div class="sp"></div>
            </div>
        </div>
        `
                $box.append(htmlTemplate);
            })
        }
    }
}())