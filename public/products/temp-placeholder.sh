#!/bin/bash
# 임시 placeholder 이미지 생성 (텍스트 기반)

create_placeholder() {
    local OUTPUT=$1
    local TEXT=$2
    
    # sips로 단색 이미지 생성 후 텍스트 오버레이
    # 400x300 크기, 회색 배경
    cat > "$OUTPUT" << 'IMGEOF'
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#e5e7eb"/>
  <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
    $TEXT
  </text>
</svg>
IMGEOF
}

# 9개 손상된 이미지용 placeholder 생성
create_placeholder "sinotech-rj45.jpg" "SinoTech RJ45 Connector"
create_placeholder "sinotech-rf.jpg" "SinoTech RF Connector"
create_placeholder "sinotech-usbc.jpg" "SinoTech USB-C"

create_placeholder "lithotop-tws.jpg" "LithoTop TWS Battery"
create_placeholder "lithotop-medical.jpg" "LithoTop Medical Battery"
create_placeholder "lithotop-pack.jpg" "LithoTop Battery Pack"

create_placeholder "amos-pin-header.jpg" "Amos Pin Header"
create_placeholder "amos-female-header.jpg" "Amos Female Header"
create_placeholder "amos-ic-socket.jpg" "Amos IC Socket"

echo "Placeholder 생성 완료"
