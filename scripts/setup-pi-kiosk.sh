#!/usr/bin/env bash
# Raspberry Pi kiosk autostart for The Monitor (Pi OS with labwc/openbox).
# Copy to the display Pi and adjust HA_URL if needed.

HA_URL="${HA_URL:-http://homeassistant.local:8123/the-monitor/0}"

mkdir -p "$HOME/.config/labwc" "$HOME/.config/openbox"

cat > "$HOME/.config/labwc/autostart" <<EOF
#!/bin/sh
xset s off
xset -dpms
xset s noblank
chromium-browser --kiosk --noerrdialogs --disable-session-crashed-bubble --disable-infobars "${HA_URL}"
EOF
chmod +x "$HOME/.config/labwc/autostart"

cat > "$HOME/.config/openbox/autostart" <<EOF
#!/bin/sh
xset s off
xset -dpms
xset s noblank
chromium-browser --kiosk --noerrdialogs --disable-session-crashed-bubble --disable-infobars "${HA_URL}"
EOF
chmod +x "$HOME/.config/openbox/autostart"

echo "Kiosk autostart written for ${HA_URL}"
