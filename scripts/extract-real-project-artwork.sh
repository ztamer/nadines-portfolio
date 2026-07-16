#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGES="$ROOT/public/images"
PETPAL_SOURCE="/Users/zeyad/Downloads/IMG_3106.jpg"
VERTEX_SOURCE="/Users/zeyad/Downloads/Vertex Landing Page 2.png"
CINEMA_MOVIE_SOURCE="/Users/zeyad/Downloads/Movie Cinema Ticket App 1.jpg"
CINEMA_SEATS_SOURCE="/Users/zeyad/Downloads/Movie Cinema Ticket App 2.jpg"
CINEMA_TICKET_SOURCE="/Users/zeyad/Downloads/Movie Cinema Ticket App 3.jpg"

render() {
  local source="$1"
  local crop="$2"
  local canvas="$3"
  local output="$4"

  ffmpeg \
    -hide_banner \
    -loglevel error \
    -y \
    -i "$source" \
    -vf "crop=${crop},scale=2700:1620:force_original_aspect_ratio=decrease,pad=2880:1800:(ow-iw)/2:(oh-ih)/2:color=${canvas}" \
    -frames:v 1 \
    -map_metadata -1 \
    -q:v 2 \
    "$IMAGES/$output"
}

render_fill() {
  local source="$1"
  local crop="$2"
  local output="$3"

  ffmpeg \
    -hide_banner \
    -loglevel error \
    -y \
    -i "$source" \
    -vf "crop=${crop},scale=2880:1800" \
    -frames:v 1 \
    -map_metadata -1 \
    -q:v 2 \
    "$IMAGES/$output"
}

render_photo() {
  local source="$1"
  local output="$2"

  ffmpeg \
    -hide_banner \
    -loglevel error \
    -y \
    -i "$source" \
    -filter_complex "[0:v]split=2[background][foreground];[background]scale=2880:1800:force_original_aspect_ratio=increase,crop=2880:1800,gblur=sigma=42[background];[foreground]scale=2880:1800:force_original_aspect_ratio=decrease[foreground];[background][foreground]overlay=(W-w)/2:(H-h)/2,format=yuv420p" \
    -frames:v 1 \
    -map_metadata -1 \
    -q:v 2 \
    "$IMAGES/$output"
}

# PetPal: vet profile/list and date/confirmation compositions.
render "$PETPAL_SOURCE" "568:514:49:4" "0xf4f2ed" "mockup-petpal.jpg"
render "$PETPAL_SOURCE" "568:322:678:162" "0xf4f2ed" "project-petpal.jpg"
render "$PETPAL_SOURCE" "568:514:49:4" "0xf4f2ed" "petpal-case-discovery.jpg"
render "$PETPAL_SOURCE" "568:322:678:162" "0xf4f2ed" "petpal-case-booking.jpg"

# Vertex: the supplied landing page, plus a closer crop of the same real UI.
render_fill "$VERTEX_SOURCE" "1410:878:0:0" "mockup-vertex-landing.jpg"
render_fill "$VERTEX_SOURCE" "1248:780:81:49" "project-vertex-landing.jpg"
render_fill "$VERTEX_SOURCE" "1410:878:0:0" "vertex-case-landing.jpg"
render_fill "$VERTEX_SOURCE" "1248:780:81:49" "vertex-case-landing-detail.jpg"

# Cinema: supplied movie, seat-selection, and mobile-ticket photography.
render_photo "$CINEMA_MOVIE_SOURCE" "mockup-cinema-booking-real.jpg"
render_photo "$CINEMA_TICKET_SOURCE" "project-cinema-booking-real.jpg"
render_photo "$CINEMA_MOVIE_SOURCE" "cinema-booking-case-movie.jpg"
render_photo "$CINEMA_SEATS_SOURCE" "cinema-booking-case-seats.jpg"
render_photo "$CINEMA_TICKET_SOURCE" "cinema-booking-case-ticket-real.jpg"
