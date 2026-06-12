#!/usr/bin/env bash
# Instala el servidor de preview como LaunchAgent (arranca en login, se mantiene vivo)
# Uso: bash install-launchagent.sh

PLIST="$HOME/Library/LaunchAgents/com.borja.veletoporra-preview.plist"

cat > "$PLIST" <<'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.borja.veletoporra-preview</string>

  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/python3</string>
    <string>-m</string>
    <string>http.server</string>
    <string>8765</string>
  </array>

  <key>WorkingDirectory</key>
  <string>/Users/baro/Claude/08 - Outputs/dashboards/veletoporra</string>

  <key>KeepAlive</key>
  <true/>

  <key>RunAtLoad</key>
  <true/>

  <key>StandardOutPath</key>
  <string>/tmp/veletoporra-preview.log</string>

  <key>StandardErrorPath</key>
  <string>/tmp/veletoporra-preview.log</string>
</dict>
</plist>
EOF

launchctl load "$PLIST"
echo "✓ Servidor arrancado en http://localhost:8765"
echo "  (se reinicia solo si se cae; arranca automáticamente en cada login)"
