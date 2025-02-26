document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map', {
        zoomSnap: 0.5
    }).setView([36.5, 127.5], 7);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors'
    }).addTo(map);
    
    var markers = [
        { name: "이정현", coords: [37.556, 127.0965], electionResult: "당선", validExist: "no", totalPromises: "42", realPromises: 0, details: "- 국제사회 약속 이행을 위한 재생에너지 보급 강화<br>• 기업의 RE100 이행 지원을 위한 제도 개선<br>• 탄소중립산업법 제정과 탈 플라스틱 대책으로 탄소중립 실현" },
        { name: "김영배", coords: [37.6054, 127.0075], electionResult: "당선", validExist: "yes", totalPromises: "60", realPromises: 5, details: "- 1회용컵 보증금제 등 자원순환 보증금 제도 확대<br>• 택배, 배달에서의 포장폐기율 발생 억제 의무화<br>• 제로에너지 건축물 인증 의무화 및 그린리모델링 지원 확대<br>• 기후 정책 전문 보좌진 배치<br>• 태양광, 풍력 등 재생에너지 비율 확대" },
        { name: "김남근", coords: [37.6068, 127.045], electionResult: "당선", validExist: "no", totalPromises: "35", realPromises: 0, details: "- 기후위기 대비 위해 ESG 경영 활성화 지원법 제정하겠습니다!" },
        { name: "우원식", coords: [37.6288, 127.075], electionResult: "당선", validExist: "no", totalPromises: "18", realPromises: 0, details: "" },
        { name: "김성환", coords: [37.6464, 127.0718], electionResult: "당선", validExist: "yes", totalPromises: "32", realPromises: 0, details: "- 수락산 자연휴양림 조성" },
        { name: "정청래", coords: [37.562, 126.9009], electionResult: "당선", validExist: "no", totalPromises: "37", realPromises: 0, details: "" },
        { name: "박주민", coords: [37.5954, 126.9176], electionResult: "당선", validExist: "yes", totalPromises: "37", realPromises: 5, details: "- 맑고 깨끗한 녹번천 복원<br>• 녹번천 복원 + 불광천 개선, 수변 중심의 공간 재편<br>• 기후에너지환경 종합지원센터 설립<br>• 노후 주택 그린리모델링 지원 확대<br>• 백련산~봉산~반홍산을 연결하는 도심 녹지축 연결" },
        { name: "최기상", coords: [37.4609, 126.8994], electionResult: "당선", validExist: "no", totalPromises: "32", realPromises: 0, details: "" },
        { name: "이인영", coords: [37.4951, 126.8683], electionResult: "당선", validExist: "yes", totalPromises: "63", realPromises: 1, details: "- 고척근린시장 공영주차장, 태양광패널설치" },
        { name: "이해식", coords: [37.5342, 127.143], electionResult: "당선", validExist: "no", totalPromises: "47", realPromises: 0, details: "" },
        { name: "정태호", coords: [37.4595, 126.9384], electionResult: "당선", validExist: "no", totalPromises: "72", realPromises: 0, details: "" },
        { name: "나경원", coords: [37.4912, 126.9675], electionResult: "당선", validExist: "yes", totalPromises: "92", realPromises: 6, details: "" },
        { name: "박정훈", coords: [37.5196, 127.1172], electionResult: "당선", validExist: "yes", totalPromises: "74", realPromises: 7, details: "- 송파둘레길(뚝방)에 맨발 걷기 길 조성<br>• 풍납토성 일대에 맨발 걷기 길 조성<br>• 첨단산업 인재를 확보하겠습니다.<br>• 난치병을 정복하는 미래의 먹거리 바이오를 육성하겠습니다.<br>• 체험형, 체류형 관광 자원으로 대한민국 관광 전성시대를 열겠습니다.<br>• 규제 샌드박스 제도를 대폭 개편하겠습니다.<br>• 민생의 고통을 덜어주는 규제 개혁을 확대하겠습니다." },
        { name: "이인선", coords: [35.8212, 128.6556], electionResult: "당선", validExist: "yes", totalPromises: "32", realPromises: 2, details: "- 진밭골 목재친화도시, 명상생태공원 조성<br>• 황토산책로, 맨발걷기길 조성, 수영장 확충 등 주민민원 해결" },
        { name: "강대식", coords: [35.8576, 128.7040], electionResult: "당선", validExist: "yes", totalPromises: "51", realPromises: 2, details: "- 팔공산국립공원 생태탐방원 조성<br>• 공산동 오수관거 정비 후 상수원보호구역 조정" },
        { name: "우재준", coords: [35.9041, 128.6272], electionResult: "당선", validExist: "no", totalPromises: "39", realPromises: 0, details: "" },
        { name: "전진숙", coords: [35.1717, 126.9036], electionResult: "당선", validExist: "yes", totalPromises: "29", realPromises: 1, details: "- 자원순환센터 조성, 노후 아파트 그린 리모델링 및 재개발 추진" },
        { name: "민형배", coords: [35.2089, 126.7844], electionResult: "당선", validExist: "yes", totalPromises: "41", realPromises: 3, details: "- 광주전남 에너지 메가시티 특별연합 설립 및 에너지 고속도로 건설<br>• 분산에너지특화지역 선정 및 에너지 전문연구기관, 기업유치<br>• 수완 원당산황토길 등 걷고싶은 산책로 조성" },
        { name: "박용갑", coords: [36.2748, 127.4097], electionResult: "당선", validExist: "yes", totalPromises: "26", realPromises: 4, details: "- 국제사회(COP28)와의 약속 이행을 위한 재생에너지 보급 강화<br>• 2030년 재생에너지 3배 확대<br>• 기업의 RE100 이행 적극 지원을 위한 RE100 활성화 제도 개선<br>• 2050년 탄소중립 실현을 위해 산업구조 대전환 지속 추진" },
        { name: "박정현", coords: [36.4068, 127.4423], electionResult: "당선", validExist: "yes", totalPromises: "52", realPromises: 12, details: "- 대덕 친환경마을버스(수요응답형 DRT 버스) 도입<br>• 산업계와 적극적 소통을 통해 정의로운 전환 탄소중립 생태도시모델 구축<br>• 기후위기에 대응하는 미래신성장산업 일자리 창출 지원<br>• 그린뉴딜 3.0정책 추진을 위한 국회포럼 구성 및 활동<br>• 대덕에 적합한 신재생에너지 개발 연구 지원<br>• 신재생에너지를 연계한 스마트그린혁신산업단지 조성<br>• 신재생에너지를 활용하여 산업단지 RE100 완성 지원<br>• 계족산 생태문화관광 상품개발 등을 통한 지속가능한 관광문화 형성<br>• 대청호 일대를 생태문화관광 특구로 지정하여 생태, 여가, 힐링도시 완성<br>• '기후위기 대응을 위한 탄소중립녹색성장 기본법', '기후변화대응 기술개발 촉진법', '기후, 기후변화 감시 및 예측 등에 관한 법률' 개정<br>• '댐 주변지역 친환경 보전 및 활용에 관한 특별법', '댐건설관리 및 주변지역지원 등에 관한 법률', '물관리기본법', '물관리기술발전 및 물산업 진흥에 관한 법률 개정" },
        { name: "유동수", coords: [37.535, 126.7257], electionResult: "당선", validExist: "yes", totalPromises: "44", realPromises: 3, details: "- 맨발걷기 및 세족시설 설치<br>• 경인고속도로 상부 공원화<br>• 계산동 일원 도시재생사업 추진" },
        { name: "정일영", coords: [37.4027, 126.6802], electionResult: "당선", validExist: "yes", totalPromises: "86", realPromises: 1, details: "- 송도 맨발 힐링, 황톳길 확충" },
        { name: "윤종오", coords: [35.5375, 129.4066], electionResult: "당선", validExist: "yes", totalPromises: "75", realPromises: 5, details: "- 어린이, 청소년, 어르신 무상버스 실시(기후위기 교통카드, 교통기본법 입법)<br>• 플라스틱, 전기차 배터리 재활용 인프라 구축<br>• 2030년까지 재생에너지 30% 추진<br>• 주민과 숙의 과정을 거쳐 해상풍력 발전 추진<br>• 노후 핵발전소 가동 중단/신규 핵 발전소 건설 백지화 추진" },
        { name: "백혜련", coords: [37.271, 126.9677], electionResult: "당선", validExist: "yes", totalPromises: "58", realPromises: 9, details: "- 서둔동 도시재생사업 추진<br>• 건물에너지 관리 시스템, 공공건물 에너지효율 개선, 태양광발전 등 재생에너지 확대, 탄소중립 통합관제시스템 도입 등<br>• 자전거도로 확충, 퍼스널 모빌리티(개인형 이동장치) 스테이션 구축<br>• 주거지 인근 자투리공유지 활용, 생활밀착형 흡수원 조성 및 기조성공원 식재보강<br>• 학교숲 조성을 통해 탄소중립학교 전환<br>• 저전력 스마트형 버스정류장 조성<br>• 태양광 패널을 이용한 그늘막 조성을 통해 보행공간 및 체육공간의 열섬 저감 효과 제고<br>• 호우시 지하차도 자동 진입차단 설비 및 재난경보장치 마련<br>• 빗물 재이용시설 설치를 통해 조경용수 확보, 빗물 순환 네트워크 구축" },
        { name: "박지혜", coords: [37.7268, 127.0328], electionResult: "당선", validExist: "yes", totalPromises: "50", realPromises: 11, details: "- 미래에너지 분야 연관 기업 집적 및 실증 테스트베드 구축 추진<br>• 미래에너지 연구시설 유치 추진: 에너지소재, 스마트그리드, 수소에너지 등<br>• 미래에너지 스타트업 밸리 구축 및 관련기업 유치 추진<br>• RE100 단지 조성 추진<br>• 미래형 녹색교통허브 구축을 위한 친환경 대중교통 활성화 노력<br>• 소풍길/녹양천 산책로 조성 및 중랑천 연결 사업 추진<br>• 도심 속 힐링 맨발 흙길 조성 추진<br>• 기후변화 체험관 건립 추진<br>• 한국형 IRA(탄소중립산업법) 제정, 그린일자리 창출<br>• 기업의 RE100 이행 지원 확대<br>• 의정부에서 시작하는 K-탄소중립산업 생태계 조성" },
        { name: "강득구", coords: [37.4037, 126.914], electionResult: "당선", validExist: "yes", totalPromises: "54", realPromises: 5, details: "- 기후위기 극복 및 탄소중립을 위한 공공기관 신재생에너지 시설 설치 의무화 확대<br>• 재활용 UP & 플라스틱 제로 사회를 위해 대형유통매장 내 재충전제품 판매대설치<br>• 병목안 수리산도립공원 생태문화공원 조성<br>• 만안구 맨발걷기 황톳길 조성<br>• 기후환경교육 에코벨트 추진(생태이야기관, 에코그린마루, 새물공원 연결)" },
        { name: "임오경", coords: [37.4714, 126.8561], electionResult: "당선", validExist: "yes", totalPromises: "26", realPromises: 2, details: "- 기후위기 극복을 위한 시민활동 지원강화<br>• 탄소포인트제 통합 및 개편으로 이용증대" },
        { name: "양문석", coords: [37.2805, 126.8861], electionResult: "당선", validExist: "yes", totalPromises: "49", realPromises: 3, details: "- RE100 이행 지원을 위한 제도 개선<br>• 지붕 태양광 설치 지원<br>• 갈대습지공원 진입로 황토길 조성" },
        { name: "김성회", coords: [37.6821, 126.8723], electionResult: "당선", validExist: "yes", totalPromises: "97", realPromises: 1, details: "- 성라산 숲세권 및 공원조성" },
        { name: "한준호", coords: [37.6375, 126.8869], electionResult: "당선", validExist: "no", totalPromises: "39", realPromises: 0, details: "" },
        { name: "이기헌", coords: [37.6742, 126.7944], electionResult: "당선", validExist: "yes", totalPromises: "62", realPromises: 3, details: "- 신재생에너지 전환 적극 지원<br>• 고봉산-경의로 숲길-정발산-호수공원-한강을 생태누리길로 연결<br>• 한강 하구 습지의 보전과 학술연구, 생태관광 활성화" },
        { name: "김영환", coords: [37.6791, 126.7323], electionResult: "당선", validExist: "yes", totalPromises: "58", realPromises: 2, details: "- 탄소중립정책 생활화<br>• 지역맞춤형 도시숲 조성" },
        { name: "이소영", coords: [37.3758, 126.9886], electionResult: "당선", validExist: "yes", totalPromises: "94", realPromises: 5, details: "- 기후위기의 주범, 석탄발전소를 2040년까지 폐쇄하기 위한 탈석탄법을 제정하겠습니다.<br>• 공공기관 건물, 철도, 도로를 활용한 공건철 RE100, 재생에너지 이격거리 규제 완화 등을 통해 재생에너지를 확대하겠습니다.<br>• 2035년 내연기관차 신차 판매를 중단시키겠습니다.<br>• 기업의 탄소중립 전환 지원법을 제정하겠습니다.<br>• 기후재난으로부터 국민을 지키기 위한 국가 인프라를 구축하고 재난대비, 피해지원 등 시스템 전반을 재설계하겠습니다." },
        { name: "윤호중", coords: [37.5845, 127.1622], electionResult: "당선", validExist: "yes", totalPromises: "43", realPromises: 1, details: "- 환경투자를 강화하고 RE100 조기 달성을 위한 재정과 금융 혁신을 이뤄내겠습니다." },
        { name: "윤종군", coords: [37.0419, 127.285], electionResult: "당선", validExist: "yes", totalPromises: "56", realPromises: 3, details: "- 수소차, 전기차 충전시설 확충<br>• 탄소중립 교통체계 도입, 구축<br>• RE100 기후위기 대응 산단 추진" },
        { name: "김현정", coords: [37.0526, 127.0431], electionResult: "당선", validExist: "yes", totalPromises: "89", realPromises: 7, details: "- 효성, 엘크루, 소사SK아파트 하천변 공원, 산책로 조성<br>• 생기자리, 용죽, 죽백 공원 숲 조성<br>• 배다리생태공원 내 저수지 수질 개선<br>• 스마트환경센터 연계 드론을 이용한 미세먼지 감시측정시스템, 도시 숲, 그린웨이 완성<br>• 진위천, 안성천, 평택호 수질환경 개선을 위한 첨단 수질측정센터 설치<br>• 평택호 수질관리 지역협의회, 민관 물관리 거버넌스 구축, 운영 활성화<br>• '분산에너지특화지구' 지정과 수소, 태양광 신재생에너지 개발로 RE100 달성 지원" },
        { name: "최민희", coords: [37.6874, 127.2913], electionResult: "당선", validExist: "yes", totalPromises: "59", realPromises: 1, details: "- 지역경제활성화: 기후위기 대응관련 탄소중립, 에너지전환 등 신산업기반 조성" },
        { name: "김용민", coords: [37.6143, 127.2293], electionResult: "당선", validExist: "yes", totalPromises: "135", realPromises: 1, details: "- 그린벨트 내 집단취락지구 규제개선 추진" },
        { name: "이학영", coords: [37.3599, 126.9072], electionResult: "당선", validExist: "yes", totalPromises: "15", realPromises: 1, details: "- 산본천 복원 및 정비로 수해 예방" },
        { name: "김용만", coords: [37.4732, 127.181], electionResult: "당선", validExist: "yes", totalPromises: "51", realPromises: 4, details: "- 자전거 친화도시 조성<br>• 경기도가 추진하는 <RE100 추진 협의체> 적극 참여<br>• 유휴부지, 옥상, 주차장 등 대체 에너지 전환 활용<br>• 자전거 등 친환경 교통수단과 연계한 탄소 저감활동의 지역화폐 보상" },
        { name: "윤후덕", coords: [37.7698, 126.7908], electionResult: "당선", validExist: "yes", totalPromises: "41", realPromises: 2, details: "- 운정호수공원 및 소리천 일대 수질개선<br>• 소리천 그늘막 역할 수목식재 확충" },
        { name: "박정", coords: [37.8945, 126.8189], electionResult: "당선", validExist: "yes", totalPromises: "84", realPromises: 2, details: "- 공릉천 철새도래지 생태관광 및 버드와칭센터건설<br>• 경기 북부 최초 국립감악산휴양림 조성" },
        { name: "소병훈", coords: [37.4445, 127.279], electionResult: "당선", validExist: "yes", totalPromises: "97", realPromises: 4, details: "- 탄소중립 목재친화도시 (wood city)조성<br>• 경안천 생태문화 수변공원 조성<br>• 너른골 자연휴양림 조성<br>• 남한산성 자연휴양림 조성" },
        { name: "송옥주", coords: [37.1717, 126.6229], electionResult: "당선", validExist: "yes", totalPromises: "76", realPromises: 4, details: "- 새솔동 수변공원 조성<br>• 사람과 동물, 자연이 공존하는 생태도시 조성<br>• 화성 갯벌 세계자연유산 등재 추진<br>• 남양호 수질 개선 및 축산악취 저감대책 마련" },
        { name: "권칠승", coords: [37.2199, 126.9939], electionResult: "당선", validExist: "yes", totalPromises: "55", realPromises: 2, details: "- 황토맨발걷기 둘레길 조성<br>• 황토맨벌걷기 둘레길 조성" },
        { name: "김용태", coords: [37.8948, 127.3458], electionResult: "당선", validExist: "yes", totalPromises: "97", realPromises: 2, details: "- 노지형 및 온실형 스마트농업종합단지 조성으로 생산성 증대 및 기후위기 대응<br>• 석탄화력발전소 저탄소 전환" },
        { name: "허영", coords: [37.7049, 127.5938], electionResult: "당선", validExist: "yes", totalPromises: "64", realPromises: 5, details: "- 국회 기후위기특별위원회 상설화 및 입법권 부여<br>• 친환경 재생에너지 대전환<br>• 자전거 중심도시 구축<br>• 공공시설 유휴부지 내 신재생 에너지 생산 시설 설치<br>• 녹색생활탄소중립 포인트 제도 개선(적립 포인트 및 항목 최대)" },
        { name: "이광희", coords: [36.5426, 127.4458], electionResult: "당선", validExist: "yes", totalPromises: "76", realPromises: 6, details: "- 현도 RE100 워케이션 단지 조성<br>• 녹지 조성 공동/개인주택 보유자에게 세제 인센티브 제공<br>• 예술의전당-국정원부지-매봉산-구룡산-망월산 도시숲 녹지축 복원<br>• 폐기물 처리 공공성 확보 및 발생지 처리제 도입<br>• 탄소 중립 인센티브 제공<br>• 에너지자족도시: 전기 유동원가 하락 - 전기요금 인하" },
        { name: "이종배", coords: [36.9899, 127.9051], electionResult: "당선", validExist: "yes", totalPromises: "99", realPromises: 4, details: "- 하천공원 조성(삼방천, 요도천)<br>• 조산공원 조기 조성<br>• 비내섬 습지공원 조성<br>• 탄금호 금가권역 생태공원 조성" },
        { name: "이정문", coords: [36.7177, 127.119], electionResult: "당선", validExist: "yes", totalPromises: "57", realPromises: 1, details: "- 불당 시민체육공원 녹지공간 조성(주민이 원하는 도심속 힐링공원)" },
        { name: "박수현", coords: [36.3852, 126.967], electionResult: "당선", validExist: "yes", totalPromises: "89", realPromises: 2, details: "- 금학생태공원 시설 확충<br>• 석성면 친환경 제2일반산업단지 조성" },
        { name: "어기구", coords: [37.0553, 126.4325], electionResult: "당선", validExist: "yes", totalPromises: "90", realPromises: 9, details: "- 왜목마을 해변 자갈 및 모래 지원사업<br>• 화력발전소, 제철소, 산폐장 환경감시 강화<br>• 석문간척지 대규모 축산단지 조성 지지<br>• 남원천 생태하천복원사업 조속완료<br>• 소형핵발전소 원천봉쇄<br>• 탄소중립도시 선정 추진<br>• 미세먼지 차단숲 등 녹지공간 확충<br>• 산업폐기물 발생지처리 원칙 도입<br>• 송전선로 단계적 지중화" },
        { name: "성일종", coords: [36.6787, 126.075], electionResult: "당선", validExist: "yes", totalPromises: "48", realPromises: 1, details: "- 가로림만 국가해양정원 조성" },
        { name: "안호영", coords: [35.6468, 127.1355], electionResult: "당선", validExist: "yes", totalPromises: "115", realPromises: 13, details: "- 용담호 에코토피아 조성사업 추진<br>• 진안천 생태하천 복원 추진<br>• 웅치전적지 명품숲 조성 추진<br>• 이상기후 대응하는 농어업재해 국가책임제 도입<br>• 탄소중립지원센터 설립 등 탄소중립 거버넌스 구축<br>• 주민상생형 재생에너지 보급 확대<br>• 온실가스 배출권거래제 등 탄소중립 산업 지원<br>• 전기 •수소차 등 그린카 보급 확대<br>• 가축분뇨 공공처리시설 증설 등 탄소저감 축산환경 조성<br>• 탄소중립직불제 등 탄소중립 선도 전략산업 육성<br>• 스마트팜 등 신기술 도입으로 미래농업 구축<br>• 조림, 숲가꾸기 등 산림경영 활동으로 탄소흡수원 확대<br>• 완주 비봉 보은매립 폐기물 이전 추진" },
        { name: "주철현", coords: [34.0478, 127.3212], electionResult: "당선", validExist: "yes", totalPromises: "41", realPromises: 2, details: "- 심산면 남면 풍황 계측기 27개소 중 해상풍력 발전 사업 기허가 11개소 4.5GW '전남 최대'<br>• 정부 제11차 전력수급기본계획에 여수 해상풍력단지 '전력 계통망 연결' 반영<br>• 묘도 중심 LNG, 수소 등 저장, 생산기지 등 에코허브 조성<br>• 해상환적 재개를 통한 동북아 에너지허브향 육성<br>• 용수지역 생태벨트 조성으로 정주여건 개선" },
        { name: "조계원", coords: [34.7715, 127.6988], electionResult: "당선", validExist: "yes", totalPromises: "46", realPromises: 6, details: "- 친환경 에너지 기본소득(햇빛연금, 바람연금)<br>• 봉계동 생태탐방로 조성지원, 어린이 체험 숲 조성<br>• 생활하수 시설 정비 및 쌍봉천 환경 개선<br>• 선소만 오염퇴적물 준설 지원 및 원인 제거<br>• 여자만 갯벌생태보존과 관광자원개발<br>• 해양치유센터 추진 지원" },
        { name: "박지원", coords: [34.4333, 126.7883], electionResult: "당선", validExist: "yes", totalPromises: "33", realPromises: 1, details: "- 탄소중립 선도지역, 기회발전 특구지정 추진 및 지원(솔라시도 기업도시, 화원산단 등 일대)" },
        { name: "허성무", coords: [35.201, 128.6736], electionResult: "당선", validExist: "yes", totalPromises: "52", realPromises: 4, details: "- 수소핵융합발전 실증로(K-DEMO) 유치<br>• 재생에너지청 신설 및 유치<br>• 유엔기후변화협약 당사국 총회 유치" },
        { name: "김정호", coords: [35.216, 128.8064], electionResult: "당선", validExist: "yes", totalPromises: "70", realPromises: 12, details: "- 도심하천 생태복원 및 유휴 도심 저수지 수변 공원화<br>• 탄소중립 숲 가꾸기 및 도심바람길, 둘레길, 맨발 황톳길 조성<br>• 탄소중립도시 선도<br>• 진례천-화포천 재해예방 및 생태하천 복원<br>• 탄소중립 홍보체험관 건립<br>• 능동 저수지 수변공원 완성<br>• 국립용지봉자연휴양림 2단계 추진 및 치유의 숲 조성 추진<br>• 조만강 생태공원 둘레길 및 흔들다리 조성<br>• 조만강, 내삼천-원지천 재해예방 및 생태하천 복원<br>• 주촌교차로 탄소중립도시숲 및 맨발 산책로 조성<br>• 봉곡천 수징개선 및 생태하천 복원<br>• 김해대로 바람길 숲 조성" },
        { name: "최형두", coords: [35.0627, 128.5577], electionResult: "당선", validExist: "yes", totalPromises: "61", realPromises: 6, details: "- 315 해양누리공원 테마숲 조성<br>• 탈탄소산업 초격차기술 연구개발센터 유치<br>• SMR(소형모듈형원자로) 핵심부품 연구제조 클러스터 조성(진북산단)<br>• 풍력발전 소프트웨어 스타트업 유치<br>• 테슬라 ESS(에너지저장장치) 부문 아태본부 유치<br>• 2040 넷제로시티 달성 특구(마산합포 전역) 지정" },
        { name: "김한규", coords: [33.5116, 126.9075], electionResult: "당선", validExist: "yes", totalPromises: "36", realPromises: 4, details: "- 환경보전분담금제 도입 추진, 자원순환클러스터 일반산업단지 조성<br>• 수소경제•신재생에너지 분야 등 에너지 신산업 육성<br>• 신재생에너지로 도내 전력수요 충족<br>• 분산에너지 특구 지정 추진" },
        { name: "이원택", coords: [35.7667, 127.0642], electionResult: "당선", validExist: "yes", totalPromises: "55", realPromises: 2, details: "- 새만금 RE100 특화지역 조성 추진<br>• 그린수소 실증단지를 통한 수소 대량생산 단지 구축" },
        { name: "김원이", coords: [34.7627, 126.362], electionResult: "당선", validExist: "yes", totalPromises: "30", realPromises: 3, details: "- RE100 전용 국가 그린산단 조성 추진<br>• 해상풍력 배후단지 건설 일자리 창출<br>• 대한민국 친환경 선박 클러스터 조성" },
        { name: "신성범", coords: [35.5589, 127.9547], electionResult: "당선", validExist: "yes", totalPromises: "50", realPromises: 4, details: "- 4개군 지자체 연합 10년 '그린플랜' 수립<br>• 합천, 재생에너지 기반 RE100 산업단지, 농장 및 클러스터 도입<br>• 친환경 소각시설 증설 및 생활자원회수센터 설치를 통한 안정적 운영 도모<br>• 합천댐, 상하부댐, 수상태양광 활용한 RE100 산업단지, 농장, 데이터센터 조성" }
    ];
    
    var markerList = document.getElementById("marker-list");
    
    function updateMarkers(filterElectionResult, filterValidExist, filterTotalPromises, filterRealPromises) {
        markerList.innerHTML = "";
        map.eachLayer(function(layer) {
            if (layer instanceof L.CircleMarker) {
                map.removeLayer(layer);
            }
        });
        
        markers.forEach(function(markerData) {
            if ((filterElectionResult === "all" || markerData.electionResult.trim() === filterElectionResult.trim()) &&
                (filterValidExist === "all" || markerData.validExist === filterValidExist) &&
                (filterTotalPromises === "all" || 
                 (filterTotalPromises === "under_20" && parseInt(markerData.totalPromises) < 20) ||
                 (filterTotalPromises === "20_39" && parseInt(markerData.totalPromises) >= 20 && parseInt(markerData.totalPromises) <= 39) ||
                 (filterTotalPromises === "40_59" && parseInt(markerData.totalPromises) >= 40 && parseInt(markerData.totalPromises) <= 59) ||
                 (filterTotalPromises === "60_79" && parseInt(markerData.totalPromises) >= 60 && parseInt(markerData.totalPromises) <= 79) ||
                 (filterTotalPromises === "80_99" && parseInt(markerData.totalPromises) >= 80 && parseInt(markerData.totalPromises) <= 99) ||
                 (filterTotalPromises === "100_plus" && parseInt(markerData.totalPromises) >= 100)) &&
                (filterRealPromises === "all" || 
                 (filterRealPromises === "zero" && markerData.realPromises == 0) ||
                 (filterRealPromises === "one_five" && markerData.realPromises >= 1 && markerData.realPromises <= 5) ||
                 (filterRealPromises === "six_ten" && markerData.realPromises >= 6 && markerData.realPromises <= 10) ||
                 (filterRealPromises === "ten_plus" && markerData.realPromises > 10))) {
                
                var color = markerData.electionResult === "낙선" ? "red" : "blue";
                var radiusSize = 6 + markerData.realPromises * 2;
                var popupContent = `${markerData.name} (${markerData.totalPromises}개 공약 중 유효공약: ${markerData.realPromises}개)<br>` + 
                    markerData.details.replace(/- /g, "<br>• ");
                var marker = L.circleMarker(markerData.coords, {
                    radius: radiusSize,
                    color: "black",
                    fillColor: color,
                    fillOpacity: 0.8,
                    weight: 1
                }).addTo(map).bindPopup(popupContent);
                
                var listItem = document.createElement("li");
                listItem.className = "marker-item";
                listItem.innerHTML = `<span>${markerData.name}</span><div class="info">전체 공약: ${markerData.totalPromises}개 / 유효공약: ${markerData.realPromises}개</div> <span class="status-badge ${markerData.electionResult === "낙선" ? "status-deceased" : "status-survived"}">${markerData.electionResult}</span>`;
                listItem.addEventListener("click", function() {
                    map.setView(markerData.coords, 10);
                    marker.openPopup();
                });
                markerList.appendChild(listItem);
            }
        });
    }
    
    document.getElementById("filter_ElectionResult").addEventListener("change", function() {
        updateMarkers(this.value, document.getElementById("filter_ValidExist").value, document.getElementById("filter_TotalPromises").value, document.getElementById("filter_RealPromises").value);
    });
    document.getElementById("filter_ValidExist").addEventListener("change", function() {
        updateMarkers(document.getElementById("filter_ElectionResult").value, this.value, document.getElementById("filter_TotalPromises").value, document.getElementById("filter_RealPromises").value);
    });
    document.getElementById("filter_TotalPromises").addEventListener("change", function() {
        updateMarkers(document.getElementById("filter_ElectionResult").value, document.getElementById("filter_ValidExist").value, this.value, document.getElementById("filter_RealPromises").value);
    });
    document.getElementById("filter_RealPromises").addEventListener("change", function() {
        updateMarkers(document.getElementById("filter_ElectionResult").value, document.getElementById("filter_ValidExist").value, document.getElementById("filter_TotalPromises").value, this.value);
    });
    
    updateMarkers("all", "all", "all", "all");
    
    document.addEventListener("wheel", function(event) {
        if (event.target.closest("#map")) {
            return;
        }
        document.getElementById("content").style.display = "block";
    });
});
