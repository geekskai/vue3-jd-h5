const Mock = require('mockjs')

let homeData = {
    status: 0,
    data: {
        headList: [
            {
                imgUrl: '//m.360buyimg.com/mobilecms/s1125x690_jfs/t29188/301/133996293/200131/61f42a01/5be8eed6Nda6a18a5.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                categoryId: 100008
            },
            {
                imgUrl: '//m.360buyimg.com/mobilecms/s1125x690_jfs/t30757/316/208746402/123953/9fa18794/5beb7d13Ne77e9f29.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                categoryId: 100016
            },
            {
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72',
                categoryId: 100035
            }
        ],
        categoryList: [
            {
                name: 'MMall超市',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t25534/207/1767774998/8085/523157d6/5bbc800fN502129b8.png',
                categoryId: 100002
            }, {
                name: '全球购',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png',
                categoryId: 100002
            }, {
                name: 'MMall时尚',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/8385/17/3537/17895/5bd6ca67E09d23550/32d965fe9a9087a2.png',
                categoryId: 100002
            }, {
                name: 'MMall生鲜',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
                categoryId: 100002
            }, {
                name: 'MMall到家',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
                categoryId: 100002
            }, {
                name: '充值缴费',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
                categoryId: 100002
            }, {
                name: '9.9元拼',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
                categoryId: 100002
            }, {
                name: '领劵',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t25258/200/2527038521/14019/3d7a8470/5be92494N557a0c5b.png',
                categoryId: 100002
            }, {
                name: '省钱',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t22120/183/200496447/5553/91ed22e0/5b03b7b8Ncea08c5b.png',
                categoryId: 100002
            }, {
                name: '全部',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png',
                categoryId: 100002
            }

        ],
        floorList: [
            {
                headUrl: '//m.360buyimg.com/mobilecms/jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg.dpg',
                list: [
                    {
                        title: '玩3C',
                        desc: '黑鲨新品大爆炸',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t25144/2/1278469398/101844/cb66b21/5b90f5bfNcd58f18b.png!q70.jpg.dpg',
                                categoryId: 100001
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22792/274/2587775944/59292/3666f607/5b87bf15N9409ba0e.png!q70.jpg.dpg',
                                categoryId: 100001
                            }
                        ]
                    },
                    {
                        title: 'MMall家电',
                        desc: '家电狂欢 京彩有你',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22363/318/1484948466/11138/8317fc9b/5b2a528eN7c6bde83.jpg!q70.jpg.dpg',
                                categoryId: 100001
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22666/293/257815171/29274/6b5605b1/5b2a5295N5a81ad96.jpg!q70.jpg.dpg',
                                categoryId: 100001
                            }
                        ]
                    },
                    {
                        title: 'MMall超市',
                        desc: '超市大放价 抢超值好货',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t16852/170/2693122660/56143/28da8c2a/5b063c63N5746e4e4.jpg!q70.jpg.dpg',
                                categoryId: 100004
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t18877/293/2631103430/85245/f220b40d/5b063c6fN7820b399.jpg!q70.jpg.dpg',
                                categoryId: 100004
                            }
                        ]
                    },
                    {
                        title: '爱家',
                        desc: '家纺热卖 部分低至9.9元',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t15244/283/356547262/47743/b6607b0f/5a2a6d51N8830e8b8.jpg!q70.jpg.dpg',
                                categoryId: 100005
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t16057/38/102057973/36179/b957e4ec/5a2a6d55N83655f7f.jpg!q70.jpg.dpg',
                                categoryId: 100005
                            }
                        ]
                    },
                    {
                        title: '家有萌宝',
                        desc: '低至五折',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg.dpg',
                                categoryId: 100006
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t18802/262/2452746578/333259/5dcdfb06/5af3ffb4N0c700b57.jpg!q70.jpg.dpg',
                                categoryId: 100006
                            }
                        ]
                    },
                    {
                        title: '爱吃',
                        desc: '9.9包邮，夏日也生动',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg!q70.jpg.dpg',
                                categoryId: 100007
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t17155/227/2678303408/52223/f7a950c/5b0535d6Ne4073be7.jpg!q70.jpg.dpg',
                                categoryId: 100007
                            }
                        ]
                    }
                ]
            },
            {
                headUrl: '//m.360buyimg.com/mobilecms/jfs/t19381/275/717008577/26686/e58b7ef4/5aa23f27Nfa6d6be3.png!q70.jpg.dpg',
                list: [
                    {
                        title: '智能家电馆',
                        desc: '满减狂欢',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t25183/247/391394027/33684/8e1af9dc/5b6d048aNd7dae520.jpg!q70.jpg.dpg',
                                categoryId: 100008
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t1/839/25/11121/19615/5bccb3a0E4b504f77/e55c2fb826efe911.jpg!q70.jpg.dpg',
                                categoryId: 100008
                            }
                        ]
                    },
                    {
                        title: '珠宝馆',
                        desc: '满减优惠',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t19009/357/347377157/13661/d0d9e5fb/5a6e8bb3Nd6182f9f.jpg!q70.jpg.dpg',
                                categoryId: 100009
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t27889/231/477152414/149859/7a5fb585/5baf1f58N45c2ca6c.jpg!q70.jpg.dpg',
                                categoryId: 100009
                            }
                        ]
                    },
                    {
                        title: '鞋靴箱包',
                        desc: '低至五折',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t21469/359/769885083/29352/68865ed/5b178e49Nc5db7341.jpg!q70.jpg.dpg',
                                categoryId: 100010
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/7091/11/2919/441267/5bd578bfE03e7166a/c5d5222c1802fd21.jpg!q70.jpg.dpg',
                                categoryId: 100010
                            }
                        ]
                    },
                    {
                        title: '童装馆',
                        desc: '春夏小萌娃',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t20614/194/808562651/89118/894d41a5/5b18ba8dN855ebe44.png!q70.jpg.dpg',
                                categoryId: 100011
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t12460/183/2350810548/47292/f4c5485/5a914202Nfc1b8a12.png!q70.jpg.dpg',
                                categoryId: 100011
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
let categoryData = {
    status: 0,
    data: [
        {
            name: '手机数码',
            mainImgUrl: '//img20.360buyimg.com/mcoss/jfs/t16273/143/46476745/45673/cba0840c/5a28ef10N82ab81d3.jpg',
            list: [
                {
                    title: '手机通讯',
                    productList: [
                        {
                            title: '手机',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg'
                        },
                        {
                            title: '全面屏手机',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg'
                        },
                        {
                            title: '游戏手机',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg'
                        },
                        {
                            title: '拍照手机',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg'
                        },
                        {
                            title: '老年机',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg'
                        },
                        {
                            title: '女性手机',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg'
                        }
                    ]
                },
                {
                    title: '手机配件',
                    productList: [
                        {
                            title: '数据线',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg'
                        },
                        {
                            title: '手机壳',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18502/160/1284774717/9251/feb8a496/5ac4878cN658cbb07.jpg'
                        },
                        {
                            title: '充电宝',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19537/23/1276961949/9676/f4b5be0d/5ac48791Nb224f939.jpg'
                        },
                        {
                            title: '手机贴膜',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg'
                        },
                        {
                            title: '耳机',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg'
                        },
                        {
                            title: '充电器',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t16774/124/1318736793/3884/cb658723/5ac4874fN6bc007b0.jpg'
                        }
                    ]
                },
                {
                    title: '摄影摄像',
                    productList: [
                        {
                            title: '单反相机',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg'
                        },
                        {
                            title: '数码相机',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12814/251/897168610/8107/60a873f/5a1679caNada7f827.jpg'
                        },
                        {
                            title: '镜头',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg'
                        },
                        {
                            title: '户外器材',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t12586/176/939117172/2550/d16b4b6c/5a1679c3N67e2b3f1.jpg'
                        }
                    ]
                },


            ]
        },
        {
            name: '电脑办公',
            mainImgUrl: '//img30.360buyimg.com/mcoss/jfs/t14743/292/279117506/48503/9b7d9f2c/5a28ea97N36cb4d16.jpg',
            list: [
                {
                    title: '热门分类',
                    productList: [
                        {
                            title: '轻薄本',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
                        },
                        {
                            title: '游戏本',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
                        },
                        {
                            title: '机械键盘',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
                        },
                        {
                            title: '组装电脑',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg'
                        },
                        {
                            title: '移动硬盘',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg'
                        },
                        {
                            title: '曲屏显示器',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg'
                        }
                    ]
                },
                {
                    title: '外设产品',
                    productList: [
                        {
                            title: '鼠标',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t11881/31/2355374158/3676/22da94de/5a16a5f0Nc6b32dda.jpg'
                        },
                        {
                            title: 'U盘',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12112/355/904591745/4308/6201dffe/5a16a5aaNdac2fe89.jpg'
                        },
                        {
                            title: '插座',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t12031/206/932335399/3567/d6d59ad9/5a16a578N283a0f75.jpg'
                        },
                        {
                            title: '电脑工具',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t12292/173/915309013/5554/78f4ab5e/5a16a560Nc7626d33.jpg'
                        },
                        {
                            title: '摄像头',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12499/54/910206832/5998/f91002f8/5a16a588Nff477d9d.jpg'
                        },
                        {
                            title: '手写板',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg'
                        }
                    ]
                }
            ],
        },
        {
            name: '家用电器',
            mainImgUrl: '',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '电饭煲',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg'
                        },
                        {
                            title: '豆浆机',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg'
                        },
                        {
                            title: '冰箱',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg'
                        },
                        {
                            title: '双开门冰箱',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg'
                        },
                        {
                            title: '冷柜',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg'
                        },
                        {
                            title: '洗衣机',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12481/129/1018625238/1840/43d49869/5a17f6eaN9ec936de.jpg'
                        },
                        {
                            title: '电热水器',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11053/246/2459202669/4318/fd6bd8d1/5a17f356Nd692ab74.jpg'
                        },
                        {
                            title: '电视',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11842/356/2416901099/2164/ab77fbaa/5a17f71eN25360979.jpg'
                        },
                        {
                            title: '4K超清电视',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11386/179/2470866031/2353/dfc7d933/5a17f72cN97075084.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '美妆护肤',
            mainImgUrl: '',
            list: [
                {
                    title: '美妆护肤',
                    productList: [
                        {
                            title: '美白',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19531/110/2538137867/14848/c3ec84ac/5afd3cc5N8aa4b7c8.jpg'
                        },
                        {
                            title: '防晒',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t17560/320/2504739891/10347/f04150c4/5afd3cbeN77d00886.jpg'
                        },
                        {
                            title: '控油',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '男装男鞋',
            mainImgUrl: '',
            list: [
                {
                    title: '男装男鞋',
                    productList: [
                        {
                            title: '夹克',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12514/85/571462957/6214/29cdf637/5a0e9496Necd5bd0e.jpg'
                        },
                        {
                            title: '风衣',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11590/82/2013872051/5874/83b5772d/5a0e947eN67f0e537.jpg'
                        },
                        {
                            title: '西服',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t13489/68/552491077/2495/7b517e4b/5a0e9483Na6231535.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '女装女鞋',
            mainImgUrl: '',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '风衣',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
                        },
                        {
                            title: '长袖T恤',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
                        },
                        {
                            title: '卫衣',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '母婴童装',
            mainImgUrl: '',
            list: [
                {
                    title: '母婴童装',
                    productList: [
                        {
                            title: '套装',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t18790/111/673564180/2396/3d27d79a/5a9f94c1N5b0c8724.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '图书音像',
            mainImgUrl: '',
            list: [
                {
                    title: '图书音像',
                    productList: [
                        {
                            title: '文学',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg'
                        },
                        {
                            title: '童书',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '户外运动',
            mainImgUrl: '',
            list: [
                {
                    title: '户外运动',
                    productList: [
                        {
                            title: '跑步鞋',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13993/246/156269250/8757/12386c/5a1fb5e7N12a676b6.jpg'
                        },
                        {
                            title: '体育用品',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12313/239/1414060687/10293/ca8ad748/5a1fb5e1Nd80abbc2.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '食品生鲜',
            mainImgUrl: '',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '休闲零食',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg'
                        },
                        {
                            title: '牛奶',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '酒水饮料',
            mainImgUrl: '',
            list: [
                {
                    title: '酒水饮料',
                    productList: [
                        {
                            title: '酒品馆',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '家居家装',
            mainImgUrl: '',
            list: [
                {
                    title: '家居家装',
                    productList: [
                        {
                            title: '实木餐桌',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg'
                        },
                        {
                            title: '椅子',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t13888/280/1737354934/3036/f94ecdf8/5a28e0d6N80f30096.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '箱包手袋',
            mainImgUrl: '',
            list: [
                {
                    title: '箱包手袋',
                    productList: [
                        {
                            title: '箱子',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '钟表珠宝',
            mainImgUrl: '',
            list: [
                {
                    title: '钟表珠宝',
                    productList: [
                        {
                            title: '瑞士手表',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14155/271/890296038/3841/f1adee7f/5a166fe1Nc6bd2f12.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '玩具乐器',
            mainImgUrl: '',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '遥控车',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t17575/123/2617650159/16720/74c14629/5b02a0c6N3f2770d9.jpg'
                        }
                    ]
                }
            ]
        },
    ]
}

Mock.mock('http://test.happymmall.com/home/data', homeData)
Mock.mock('http://test.happymmall.com/category/data', categoryData)