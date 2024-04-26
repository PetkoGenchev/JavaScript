function a() {
    let name1 = 'asdas'
    function b() {
        let name2 = 'asdas2'
        function c() {
            let name3 = 'asdas3'
            function d() {
                let name4 = 'asdas4'
                console.log(this);
            }
            d();
        }
        c();
    }
    b();
}
a();