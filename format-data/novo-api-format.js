const people = [
        {
            swift:
            [
                {
                    chinese:[{name:'张三',age:18}],
                    japan:[{name:'秋田君',age:3}]
                }
            ],
            telenav:[{name:'爱丽丝',age:22}]
        }
    ]
    // 提取到所有不同公司不同国家的人 like family:[{name:'',age:''},{name:'',age:''},{name:'',age:''}]

    function formatter(people) {
        return people.reduce((pacc,pcur) => {
            const {swift,telenav} = pcur;
            const arr1 = swift.reduce((sacc,acur) => {
                const {chinese, japan} = acur;
                return [
                    ...chinese.map((cItem) => cItem),
                    ...japan.map((jItem) => jItem),
                    ...sacc
                ]
            }, [])
            const arr2 = telenav.reduce((tacc,tcur) => {
                return [
                    tcur,
                    ...tacc
                ]
            }, [])
            return [
                ...arr1,
                ...arr2,
                ...pacc
            ]
        },[])

    }

console.log(formatter(people))

const student = [{name:'小袁',age:18}]