const factory = {
    user: (uid, id, password, fullName, bio, school) => ({ uid, id, password, fullName, school, bio }),
    market: (id, name, posts) => ({ id, name, posts }),
    post: (uid, id, title, contents, comments) => ({ uid, id, title, contents, comments }),
    comment: (uid, id, content) => ({ uid, id, content }),
    schools: (id, name, content) => ({ id, name, content })
}

exports.users = [
    factory.user(
        0,
        'a1p4ca',
        'a1p4capwd',
        '박성민',
        '한국디지털미디어고',
        '자퇴하고싶어요',
    ),
    factory.user(
        1,
        'kattpish',
        'somethingpwd',
        '안다해',
        '한국디지털미디어고',
        '공부하기싫어요'
    ),
    factory.user(
        2,
        'ashley102',
        'password!',
        '손채린',
        '한국디지털미디어고',
        '우주최강기획자 채린갓'
    ),
    factory.user(
        3,
        'chaey5972',
        'perfect!!',
        '조채연',
        '미림여고',
        '우주최강디자이너 채연갓'
    )
]

exports.markets = [
    factory.market(0, 'IT', [
        factory.post(
            0,
            0,
            '종이접기를 팔아요',
            '종이접기로 세계 1등 먹은 저를 데려가세요 >_<',
            [
                factory.comment(
                    1,
                    0,
                    '누구세여??'
                ),
                factory.comment(
                    1,
                    1,
                    '연락줘요~~'
                )
            ]
        ),
        factory.post(
            1,
            1,
        )
    ]),
    factory.market(1, '미술', [
        factory.post(
            2,
            0,
            '몸이 고무처럼 늘어나요!',
            '몸이 고무처럼 늘어나는 고무인간 채린이를 가져가세요!\n기획은 덤!',
            [
                factory.comment(
                    0,
                    1,
                    '너가 그렇게 기획을 잘해??'
                )
            ]
        )
    ])
]

exports.schools = [
    factory.schools(0, '무중력학교', '무중력학교입니다!')
]