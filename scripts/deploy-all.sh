#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build
node scripts/upload-via-samba.mjs
node scripts/ha_setup.mjs
node scripts/generate-config.mjs

echo
echo "Deployment complete."
echo "Dashboard: http://homeassistant.local:8123/the-monitor/0"
echo "Import config on each device via Settings -> Export/Import using deploy/the-monitor-config.json"
