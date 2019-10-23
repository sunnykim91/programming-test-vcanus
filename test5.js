let pond = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

// 0은 땅, 1은 물 , 땅은 깊이가 0 물의 최초 깊이는 1

function checkDeepPond() {
    for(let i = 0; i < pond.length; i++) {
        for(let j = 0; j < pond.length; j++) {
            let current = pond[i][j];
            if(current === 0) continue;
            if(i-1 < 0) continue;
            if(i+1 >= pond.length) continue;
            if(j-1 < 0) continue;
            if(j+1 >= pond.length) continue;
            
            if (pond[i-1][j] >= current) {  // 상 비교
                if (pond[i+1][j] >= current) {  // 하 비교
                    if (pond[i][j-1] >= current) {  // 좌 비교
                        if (pond[i][j+1] >= current) {  // 우 비교
                            current++;
                        }
                    }
                }
            }
            pond[i][j] = current;
        }
    }
}

function main() {
    for (let i = 0; i < 5; i++ ) {
        checkDeepPond();
    }
    console.log(pond);

    let sumPondDeep = 0;

    pond.forEach((row)=>{
        row.forEach((col) => {
            sumPondDeep += col;
        })
    });

    console.log(sumPondDeep);
}


main();