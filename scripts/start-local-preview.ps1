$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$toolsDir = Join-Path $repoRoot '.tools'
New-Item -ItemType Directory -Force -Path $toolsDir | Out-Null

$goDir = Join-Path $toolsDir 'go-runtime'
if (-not (Test-Path (Join-Path $goDir 'bin\go.exe'))) {
  $goZip = Join-Path $toolsDir 'go.zip'
  Invoke-WebRequest -Uri 'https://go.dev/dl/go1.26.5.windows-amd64.zip' -OutFile $goZip
  if (Test-Path $goDir) {
    Remove-Item -Recurse -Force $goDir
  }
  Expand-Archive -Path $goZip -DestinationPath $toolsDir -Force
  Rename-Item -Path (Join-Path $toolsDir 'go') -NewName 'go-runtime'
}

$hugoDir = Join-Path $toolsDir 'hugo-0.121.2'
$hugoExe = Join-Path $hugoDir 'hugo.exe'
if (-not (Test-Path $hugoExe)) {
  $hugoZip = Join-Path $toolsDir 'hugo121.zip'
  Invoke-WebRequest -Uri 'https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_extended_0.121.2_windows-amd64.zip' -OutFile $hugoZip
  if (Test-Path $hugoDir) {
    Remove-Item -Recurse -Force $hugoDir
  }
  New-Item -ItemType Directory -Path $hugoDir | Out-Null
  Expand-Archive -Path $hugoZip -DestinationPath $hugoDir -Force
}

$env:Path = (Join-Path $goDir 'bin') + ';' + [System.Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path', 'User')

$port = 1313
if (Get-NetTCPConnection -LocalAddress '127.0.0.1' -LocalPort 1313 -State Listen -ErrorAction SilentlyContinue) {
  $port = 1314
}

Write-Host "Starting Hugo preview at http://localhost:$port/"
& $hugoExe server --bind 127.0.0.1 --port $port --disableFastRender
