### DEVIEW 2017 '그런 REST API로 괜찮은가' 정리  

### 발표자 이응준님의 말씀처럼 개발자라면 누구나 들어봤지만, 무언가 미묘하게 모르겠는 REST에 대해서 정리해보았다.

### REST
1. REpresentational State Transfer
2. 컴퓨터 시스템간의 상호운영성을 제공하는 방법 중 하나.

### 세상에 등장하게 된 역사
1. WEB(1991), 팀 버너스 리 
	Q. 어떻게 인터넷에서 정보를 제공할 것인가?
	A. 정보들을 하이퍼텍스트로 연결. 표현형식: HTML, 식별자: URI, 전송방식: HTTP
2. HTTP/1.0(1994-1996), 로이 필딩
	Q. 어떻게 웹을 무너뜨리지 않고 HTTP를 진보시킬 수 있을까??
	A. HTTP Object Model
3. REST(1998), 로이 필딩
	HTTP Object Model를 REST라는 이름으로 Microsoft Research에서 발표.
4. REST(2000)
	박사 논문으로 발표. 우리가 알고있는 REST를 정의하는 논문.

### REST API
REST 아키텍쳐 스타일을 따르는 API.

### REST
분산 하이퍼미디어 시스템(예: 웹)을 위한 아키텍쳐 스타일.
	1. 아키텍쳐 스타일: 제약조건의 집합. 
	2. 즉, REST의 제약조건을 모두 지켜야 REST라고 할 수 있다.
	
### REST의 제약조건
1. client-server
2. stateless
3. cache
4. uniform interface
5. layered system
6. code-on-demand(optional)

### Uniform Interface의 제약조건
위 REST의 제약조건은 HTTP만 잘 따라도 충족할 수 있다. 그러나 Uniform Interface가 잘 지켜지지 않는다.
1. 리소스가 URI로 식별되면 된다.
2. GET/POST의 표현을 통해 자원을 전송해야한다.
3. 메세지는 스스로를 설명해야 한다.(클라이언트가 메세지 이해할 수 있어야 함.)
4. 애플리케이션의 상태는 하이퍼링크를 이용해 전이되어야 한다.

### Uniform Interface가 필요한 이유
독립적 진화를 위해.
	1. 서버와 클라이언트가 각각 독립적으로 진화한다.
	2. 서버의 기능이 변경되어도 클라이언트를 업데이트할 필요가 없다.
	3. (REST를 만들계 된 계기가, 어떻게 웹을 무너뜨리지 않고 HTTP를 진보시킬 수 있을까에서 시작.)
	
### Web
1. 웹 페이지를 변경했다고 웹 브라우저를 업데이트할 필요는 없다.
2. 웹 브라우저를 업데이트 했다고 웹 페이지를 변경할 필요도 없다.
3. HTTP 명세가 변경되어도 웹은 잘 동작한다.
4. HTML 명세가 변경되어도 웹은 잘 동작한다.
- 상호운용성(interoperability)에 대한 집착

### REST가 웹의 독립적 진화에 도움을 주었나
1. HTTP에 지속적으로 영향을 줌
2. HOST헤더 추가길이 제한을 다루는 방법이 명시(414 URI Too Long등)
3. URI에서 리소스의 정의가 추상적으로 변경됨: "식별하고자 하는 무언가"
4. 기타 HTTP와 URI에 많은 영향을 줌
5. HTTP/1.1명세  최신판에서 REST에 대한 언급이 들어감
- Roy T.Fielding이 HTTP & URI 명세의 저자 중 한 명.)

### REST API는 REST의 규칙을 전부 다 지켜야 하는가?
로이필딩: "하이퍼텍스트를 포함한 self-descriptive한 메시지의 uniform interface를 통해 리소스에 접근하는 API"

### Self-descriptive 
1. 확장 가능한 커뮤니케이션을 가능하게 한다.
2. 서버나 클라이언트가 변경되더라도 오고가는 메시지는 언제나 self-descriptive하므로 언제나 해석이 가능하다.

### HATEOAS
1. 애플리케이션 상태 전이의 late binding
2. 어디서 어디로 전이가 가능한지 미리 결정되지 않는다. 
3. 어떤 상태로 전이가 완료되고 나서야 그 다음 전이될 수 있는 상태가 결정된다.
4. 링크는 동적으로 변경될 수 다.

### HTML/JSON
1. (HTML/JSON) 하이퍼링크: 가능(a태그 등)/정의되어 있지 않음.
2. (HTML/JSON) Self-descriptive: 됨(HTML명세)/불완전

### JSON을 REST로 변경
Self-descriptive
	1. Media type
		1. 미디어 타입을 하나 정의한다.
		2. 미니어 타입 문서를 작성한다. 이 문서에 "id"등이 뭔지 의미를 정의한다.
		3. IANA에 미디어 타입을등록한다. 이 때 만든 문서를 미디어 타입의 명세로 등록한다.
		4. 이 메시지를 보는 사람은 명세를 찾아갈 수 있으므로 이 메시지의 의미를 온전히 해석할 수 있다.
		- 단점: 매번 Media type을 정의해야 한다.
	2. Profile
		1. "id"등이 뭔지 의미를 정의한 명세를 작성한다.
		2. Link헤더에 profile relation으로 해당 명세를 링크한다.
		3. 이 메시지를 보는 사람은 명세를 찾아갈 수 있으므로 이 메시지의 의미를 온전히 해석할 수 있다.
		- 단점: 클라이언트가 Link(RFC 5988)헤더와 profile(RFC 6906)을 이해해야 한다.
			 - Content negotiation을 할 수 없다.
### HATEOAS
1. data
	- data에 다양한 방법으로 하이퍼링크를 표현한다.
	- 단점: 링크를 표현하는 방법을 직접 정의해야 한다.
	- 예시: {
			"links" : {
				"test": "https://example.org/test/{id}"
			},
			"data": [{
				"id": 1,
				"title": "REST"
			}]
		 }
	- 단점: 마찬가지로 링크를 표현하는 방법을 직접 정의해야 한다.
	- JSON으로 하이퍼링크를 표현하는 방법을 정의한 명세들을 활용한다.
	- 예시: {
			"data": [{
				"id": 1,
				"title": "REST"
				"links": { "self": "http://example.org/test/1"}
			}]
		 }
	- 단점: 기존 API를 많이 고쳐야 한다.(침투적)
2. HTTP Header
	1. Link, Location등의 헤더로 링크를 표현한다.
	- 단점: 정의된 relation만 활용한다면 표현에 한계가 있다.
	
- HATEOAS는 data,header모두 활용하는 것이 좋다.	

### Media type의 등록은 필수인가?
- NO
- 저자가 이해할 수 있다면 등록할 필요는 없다.(로이 필딩)

### 정리
1. 오늘날 대부분의 "REST API"는 사실 REST를 따르고 있지 않다.
2. REST제약조건 중에서 특히 Self-descriptive와 HATEOAS를 잘 만족하지 못한다.
3. REST는 긴 시간에 걸쳐 진화하는 웹 애플리케이션을 위한 것이다.
4. REST를 따를 것인지는 API를 설계하는 이들이 스스로 판단하여 결정해야 한다.
5. REST를 따르겠다면, Self-descriptive와 HATEOAS를 만족시켜야 한다.
	1. Self-descriptive는 custom media type || profile link relation등으로 만족시킬 수 있다.
	2. HATEOAS는 HTTP헤더나 본문에 링크를 담아 만족시킬 수 있다.
6. "REST를 따르지 않겠다면, REST를 만족하지 않는 REST API를 뭐라고 부를지 결정해야 할 것이다.(HTTP API등)"
