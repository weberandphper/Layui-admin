var ModuleTable = function() {
    this.config = {
        elem: '#demo',
        height: 'full-135', //容器高度
        url: 'table.json',
        page: true,
        id: 'demo',
        cols: [
            [
                { checkbox: true, fixed: true },
                { field: 'id', title: 'ID', width: 80 },
                { field: 'username', title: '用户名', width: 80 },
                { field: 'sex', title: '性别', width: 80 },
                { field: 'city', title: '城市', width: 80 },
                { field: 'sign', title: '签名', width: 177 },
                { field: 'experience', title: '积分', width: 80 },
                { field: 'score', title: '评分', width: 80 },
                { field: 'classify', title: '职业', width: 80 },
                { field: 'wealth', title: '财富', width: 135, sort: true },
                { fixed: 'right', title: '操作', width: 150, align: 'center', toolbar: '#barDemo' }
            ]
        ],
        done: function(res, curr, count) {
            //如果是异步请求数据方式，res即为你接口返回的信息。
            //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
            // console.log(res);
            // //得到当前页码
            // console.log(curr);
            // //得到数据总量
            // console.log(count);
        },
        loading: true,
        //method: 'post'
    }
};
ModuleTable.fn = ModuleTable.prototype;

ModuleTable.fn.extend = function(options) {
    var table = options.table,
        layer = options.layer,
        form = options.form,
        $ = options.jquery,
        currTable = options.currTable; //当前table实例 
    //渲染表单
    form.render(null, 'kit-search-form');
    //监听搜索表单提交
    form.on('submit(search)', function(data) {
        console.log(data.field);
        layer.msg(JSON.stringify(data.field));
        //带条件查询
        currTable.reload({
            where: data.field
        });
        return false;
    });
    //监听工具条
    table.on('tool(demo)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值
        var tr = obj.tr; //获得当前行 tr 的DOM对象
        console.log(obj);

        if (layEvent === 'detail') { //查看
            console.log(table.checkStatus('demo'));
            //do somehing
        } else if (layEvent === 'del') { //删除
            // var htm = [
            //     '<p>确定要删除吗?</p>',
            //     '<button class="layui-btn layui-btn-mini layui-btn-primary">取消</button>',
            //     '<button class="layui-btn layui-btn-mini">确定</button>'
            // ];
            // layer.tips(htm.join(''), this, {
            //     time: 0,
            //     skin: 'kit-table'
            // });
            layer.confirm('真的删除行么', function(index) {
                obj.del(); //删除对应行（tr）的DOM结构
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if (layEvent === 'edit') { //编辑
            //do something

            //同步更新缓存对应的值
            obj.update({
                username: '123',
                title: 'xxx'
            });
        }
    });
    $('#kit-search-more').on('click', function() {
        $('.kit-search-mored').toggle();
    });
}


var moduleTable = new ModuleTable();