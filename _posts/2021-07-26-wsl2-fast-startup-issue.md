---
layout: post
title: "WSL2에서 로컬호스트 연결 불가"
categories: misc
date: 2021-07-26 02:53 +0900
---

리눅스용 윈도우 하위시스템 2(Windows Subsystem for Linux 2, WSL2)를 사용할 때 특정 조건에서 로컬호스트(localhost)에 접속이 되지 않는 문제가 있다. 예컨대 비주얼 스튜디오 코드(Visual Studio Code, VS Code)에서 라텍 워크숍(Latex Workshop)을 이용해 텍(TeX) 문서를 작성 후 VS코드 탭 또는 웹브라우저로 프리뷰를 열면 연결이 거부되었다(connection refused)고 오류가 출력된다. 깃허브 WSL 저장소에 증상이 보고되었고 마찬가지로 (잠정적인) 해결책도 보고된 상태다: <a href="https://github.com/microsoft/WSL/issues/5211" style="font-family: 'Cousine'; font-size: 15px;">https://github.com/microsoft/WSL/issues/5211</a>.

파워쉘(PowerShell)이나 명령프롬프트(Command Prompt)를 열어서 WSL을 종료한다:
<pre><code class="cmd">wsl --shutdown</code></pre>

그리고 WSL을 재시작한다: <code class="cmd">wsl</code>.

해당 이슈에서는 언급되지 않았으나, 내 생각에 증상의 원인은 윈도우10의 빠른시작(Fast Startup)과 관련된 것 같다. 윈도우 재시작 시 WSL이 제대로 초기화되지 않는다는 증상이 보고되어 있다: <a href="https://github.com/microsoft/WSL/issues/6244" style="font-family: 'Cousine'; font-size: 15px;">https://github.com/microsoft/WSL/issues/6244</a>. 실제로 빠른시작을 해제하면 증상은 없앨 수 있다.

빠른시작을 해제하려면 최대절전모드를 해제하면 된다: 파워쉘 또는 명령프롬프트에서,

<pre><code class="cmd">powercfg -h off</code></pre>

<script>
$(function() {
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
</script>