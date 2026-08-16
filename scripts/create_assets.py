from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"


def font(size: int) -> ImageFont.ImageFont:
    try:
        return ImageFont.truetype("arial.ttf", size)
    except OSError:
        return ImageFont.load_default()


def rounded_rect(draw: ImageDraw.ImageDraw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def create_hardware_lab():
    img = Image.new("RGB", (1400, 1050), "#101827")
    draw = ImageDraw.Draw(img)

    for x in range(0, 1400, 56):
        draw.line((x, 0, x, 1050), fill="#17253a", width=1)
    for y in range(0, 1050, 56):
        draw.line((0, y, 1400, y), fill="#17253a", width=1)

    rounded_rect(draw, (125, 120, 1275, 900), 26, "#12365b", "#2b7bc7", 4)
    rounded_rect(draw, (190, 190, 1210, 830), 18, "#0f2a47", "#58cdf4", 2)

    slots = [(245, 250), (465, 250), (685, 250), (905, 250)]
    labels = ["PCIe5", "HDMI2.1", "QSFP28", "LPDDR4"]
    colors = ["#1d5d9b", "#146c72", "#255a9a", "#2d6a4f"]
    for (x, y), label, color in zip(slots, labels, colors):
        rounded_rect(draw, (x, y, x + 165, y + 430), 14, color, "#9be8ff", 2)
        rounded_rect(draw, (x + 24, y + 38, x + 141, y + 112), 10, "#0c1628", "#c7f6ff", 1)
        draw.text((x + 38, y + 58), label, fill="#ffffff", font=font(24))
        for i in range(8):
            yy = y + 150 + i * 28
            draw.line((x + 28, yy, x + 137, yy), fill="#7ee7ff", width=2)
        for i in range(6):
            draw.ellipse((x + 38 + i * 18, y + 382, x + 48 + i * 18, y + 392), fill="#8fffd4")

    rounded_rect(draw, (275, 710, 1125, 780), 12, "#182135", "#ffffff", 1)
    draw.text((315, 729), "PGT+ / Prodigy+ high-speed interconnect backplane", fill="#d7f6ff", font=font(28))

    traces = [(330, 455, 1038, 455), (330, 505, 1038, 505), (330, 555, 1038, 555)]
    for line in traces:
        draw.line(line, fill="#43d3ff", width=4)
        draw.line((line[0], line[1] + 10, line[2], line[3] + 10), fill="#9cffcb", width=2)

    rounded_rect(draw, (520, 82, 880, 150), 14, "#0d1726", "#58cdf4", 2)
    draw.text((555, 104), "JUNCHENG PROTOTYPE LAB", fill="#ffffff", font=font(30))

    PUBLIC.mkdir(parents=True, exist_ok=True)
    img.save(PUBLIC / "hardware-lab.png", quality=92)


if __name__ == "__main__":
    create_hardware_lab()
