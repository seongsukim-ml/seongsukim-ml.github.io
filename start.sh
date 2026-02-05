#!/bin/bash

echo "🚀 블로그 웹 서버 시작"
echo "======================="
echo ""

# Check if we're in the correct directory
if [ ! -f "index.html" ]; then
    echo "❌ 오류: index.html 파일을 찾을 수 없습니다!"
    echo "   이 스크립트는 new_blog 폴더에서 실행해야 합니다."
    echo ""
    echo "올바른 방법:"
    echo "  cd /경로/to/new_blog"
    echo "  ./start.sh"
    exit 1
fi

# Check if data folder exists
if [ ! -d "data" ]; then
    echo "❌ 오류: data 폴더를 찾을 수 없습니다!"
    exit 1
fi

echo "✅ 디렉토리 확인 완료"
echo "✅ index.html 발견"
echo "✅ data 폴더 발견"
echo ""

# Count JSON files
json_count=$(ls data/*.json 2>/dev/null | wc -l)
echo "✅ JSON 파일 $json_count개 발견"
echo ""

# Start server
echo "🌐 웹 서버 시작 중..."
echo "   URL: http://localhost:8000"
echo ""
echo "💡 브라우저에서 http://localhost:8000 를 여세요"
echo "   종료하려면 Ctrl+C를 누르세요"
echo ""
echo "======================="
echo ""

python3 -m http.server 8000
