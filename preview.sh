#!/usr/bin/env bash
# Preview local de la Veletoporra — abre el mismo HTML que ve GitHub Pages
# Uso: ./preview.sh [puerto]

PORT=${1:-8765}
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "▶ Veletoporra local → http://localhost:$PORT"
echo "  (misma fuente que remoto: clasificacion.json relativo)"
echo "  Ctrl+C para parar"
echo ""

# Abre el navegador automáticamente (macOS)
sleep 0.4 && open "http://localhost:$PORT" &

cd "$DIR"
python3 -m http.server $PORT
