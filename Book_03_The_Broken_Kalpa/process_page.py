import os, glob, shutil, json, re
from PIL import Image

BASE_DIR = r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa"
BRAIN_DIR = r"C:\Users\baisa\.gemini\antigravity\brain\38be0bbe-5ef4-4c9f-a76a-611a6335b980"

PAGE_PROMPTS = {
    30: {
        "title": "Act II Scene Page 30",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Inside the crumbling sanctuary, Aryan stands tall with his awakened Kanabo gleaming with cosmic Soma energy. Panel 2: Veda checks her terminal diagnostics, blue light reflecting on her face, seeing the stability metrics climbing. Panel 3: In the shadow of the colossal Rishi Gateway, a dark ominous silhouette emerges with glowing malevolent eyes, setting up the impending climax threat. Dynamic G-pen ink shading, heavy crosshatching, dramatic speed lines. English sound effects. Classic Manga Ink B&W style."
    },
    31: {
        "title": "Entering the Sanctum: Non-Euclidean architecture warping endlessly",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Aryan and Veda step through the threshold into the inner Sanctum, where massive stone archways warp and bend in impossible non-Euclidean perspective. Panel 2: Close-up of Aryan's determined expression, glowing cosmic circuit markings across his face and arm. Panel 3: Veda pointing forward through shifting gravitational corridors with floating debris. Dynamic G-pen ink lines, dense kakeami shading, beta-nuri blacks, English SFX. Classic Manga Ink B&W style."
    },
    32: {
        "title": "Emperor Vishwamitra floats at the singularity nexus",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Emperor Vishwamitra floats dramatically at the center of a swirling singularity nexus, wearing ornate ivory and gold cybernetic armor. Panel 2: Close-up of Vishwamitra holding the fractured Kala-Danda scepter, dark energy radiating from it. Panel 3: Low-angle shot of Aryan looking up from the sanctum floor, raising his Kanabo staff in defiance. G-pen shading, heavy crosshatching, dramatic speedlines, English SFX. Classic Manga Ink B&W style."
    },
    33: {
        "title": "Double-spread reveal: The Dying Universe Engine and Vishwamitra",
        "panels": 2,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 2 panels (Master Double-Spread Reveal). Panel 1: The inner sanctum stone doors crumble into dust under intense gravity waves. Panel 2: High-epic wide shot of Emperor Vishwamitra floating before the titanic Dying Universe Engine, a colossal cosmic gear mechanism consuming stars, holding the Kala-Danda scepter. Extreme depth, intricate G-pen crosshatching, beta-nuri fills, dramatic cosmic scale. English SFX: HUMMM... Classic Manga Ink B&W style."
    },
    34: {
        "title": "Philosophical standoff: Vishwamitra despair vs Aryan hope",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Intense split close-up of Emperor Vishwamitra shouting with tragic conviction about eternal order. Panel 2: Close-up of Aryan gripping his Kanabo tight, shouting back with fiery eyes: 'Free will is worth every scar!'. Panel 3: Veda behind Aryan, preparing her magnetic chakram launcher. Intense manga emotion, heavy ink shadows, speedlines, English SFX. Classic Manga Ink B&W style."
    },
    35: {
        "title": "Act II Climax: Vishwamitra unleashes the Singularity Torrent",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels (Act II Climax). Panel 1: Emperor Vishwamitra thrusts the Kala-Danda forward, unleashing a swirling black hole torrent of gravitational blasts. Panel 2: Aryan leaps in front of Veda, crossing his Kanabo to shield them as the shockwave impacts. Panel 3: The sanctum floor shatters, plunging them all into freefall. Dynamic action composition, high contrast G-pen ink, explosive speedlines, English SFX: ROAAAR! Classic Manga Ink B&W style."
    },
    36: {
        "title": "Climax Opening: Aryan radiant Astra-shield clashes against black-hole beam",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Aryan projects a glowing geometric Astra energy shield from his Kanabo. Panel 2: Extreme impact clash as Vishwamitra's black-hole laser beam slams against the radiant shield, sending shockwaves across space. Panel 3: Veda maneuvering her magnetic harness through the energy discharge. Dynamic action, G-pen crosshatching, explosive radial lines, English SFX: BOOM! Classic Manga Ink B&W style."
    },
    37: {
        "title": "Shockwave shatters Sanctum floor; duel in freefall",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Massive explosion shatters the stone floor of the Sanctum into floating boulders. Panel 2: Aryan and Vishwamitra engage in mid-air freefall combat, weapons clashing amidst zero-gravity debris. Panel 3: Dramatic vertical tracking shot as they fall through swirling nebula energy. Extreme action angles, heavy ink shadows, speedlines, English SFX: CLANG! Classic Manga Ink B&W style."
    },
    38: {
        "title": "High-speed mid-air weapon exchanges: Kanabo vs Kala-Danda",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Aryan strikes with a heavy downward swing of his Kanabo, leaving a trail of starlight. Panel 2: Vishwamitra parries with the Kala-Danda, distortion blades clashing in sparks. Panel 3: Close-up of Aryan's intense gaze amidst the blinding combat spark flare. Dynamic G-pen lines, high speed action, beta-nuri black, English SFX: CRASH! Classic Manga Ink B&W style."
    },
    39: {
        "title": "Vishwamitra teleports through gravity portals, striking from all angles",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Multiple portal rifts open around Aryan in zero-gravity space. Panel 2: Vishwamitra emerges from a rift behind Aryan, striking with gravitational force. Panel 3: Aryan barely blocks with his Kanabo, knocked back onto a floating temple pillar. Dynamic manga layouts, portal ripple effects, heavy ink shading, English SFX: SWOOSH! Classic Manga Ink B&W style."
    },
    40: {
        "title": "Aryan endures damage, crystalline body absorbing kinetic shock",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Aryan kneels on a shattered stone block, breathing heavily, wounds glowing with golden Soma circuitry. Panel 2: Close-up of Aryan's face as crystalline armor forms across his cheek and shoulder, absorbing kinetic energy. Panel 3: Aryan stands back up, his eyes blazing with cosmic resolve, gripping his Kanabo with both hands. Emotional resolve, high contrast ink, crosshatching, English SFX: SHHH... Classic Manga Ink B&W style."
    },
    41: {
        "title": "Veda crucial assist: Overclocked chakrams sever gravity tether",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Veda aims her twin overclocked magnetic chakrams with laser precision. Panel 2: The glowing chakrams slice clean through Emperor Vishwamitra's gravity tether cables behind him. Panel 3: Vishwamitra loses his spatial stabilization, staggering mid-air in surprise. High speed action, G-pen lines, glowing blade trails, English SFX: SLASH! Classic Manga Ink B&W style."
    },
    42: {
        "title": "3D Panel Break: Aryan dashes through broken space, staff blazing with supernova light",
        "panels": 2,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 2 panels (3D Panel Break). Panel 1: Veda shouts 'Now, Aryan!'. Panel 2: Extreme perspective panel break as Aryan dashes straight toward the reader through shattering dimensional panels, his Kanabo staff blazing like a supernova, leaving a trail of starlight. Dynamic manga composition, explosive energy burst, heavy ink shading, English SFX: DASH! Classic Manga Ink B&W style."
    },
    43: {
        "title": "THE CLIMACTIC STRIKE: Kanabo shatters Kala-Danda into stellar dust",
        "panels": 2,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 2 panels (Grand Climax Strike). Panel 1: Extreme 3D panel break shot: Aryan's fully awakened Soma Kanabo smashes directly into Vishwamitra's Kala-Danda scepter, shattering it into thousands of explosive glass-like fragments flying at the reader! Panel 2: The impact shockwave cracks Vishwamitra's armor chestplate. Explosive radial starbursts, G-pen, beta-nuri, English SFX: KRA-SHATTER-SLAM! Classic Manga Ink B&W style."
    },
    44: {
        "title": "Massive full-page shockwave: Singularity implodes in pure golden starlight",
        "panels": 1,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 1 Full Page Epic Splash. The dark singularity core implodes into a blinding golden starlight supernova burst, dissolving the dark void and filling the entire frame with brilliant crystalline starlight and floating feathers of divine energy. High detail ink crosshatching, dramatic light beams, open space, English SFX: FLASH! Classic Manga Ink B&W style."
    },
    45: {
        "title": "Vishwamitra falls to knees: You chose chaos... Aryan: We chose freedom",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Emperor_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Defeated Emperor Vishwamitra falls to his knees on floating temple ruins, his cybernetic armor cracking, dark tattoos fading. Panel 2: Close-up of Vishwamitra looking up weakly: 'You chose chaos...'. Panel 3: Close-up of Aryan standing over him, lowers his Kanabo, offering his hand: 'We chose freedom.' Tragic resolution, emotional depth, heavy ink contrast, soft starlight background. Classic Manga Ink B&W style."
    },
    46: {
        "title": "Aryan channels collapsing Astra energy into earth, healing Brahma Wound",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Aryan drives his Kanabo staff deep into the ancient nexus altar floor. Panel 2: Waves of gentle golden starlight flow downward into the shattered earth chasm below. Panel 3: Veda watches in awe as the toxic red corruption turns into lush green roots and flowers. Majestic healing visuals, fine G-pen lines, serene atmosphere. Classic Manga Ink B&W style."
    },
    47: {
        "title": "Reality stitches back together; floating ruins dissolve into starlight",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: The fragmented sky and floating islands dissolve into glowing stardust grains. Panel 2: Golden threads of divine energy stitch the torn horizon back together into a solid sky. Panel 3: Aryan and Veda stand side by side on a rising grassy hill. Atmospheric beauty, delicate ink shading, peaceful tone. Classic Manga Ink B&W style."
    },
    48: {
        "title": "Aryan and Veda stand on regenerated green ridge overlooking new Aryavarta",
        "panels": 2,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 2 panels. Panel 1: Wide panoramic shot of Aryan and Veda standing on a high cliff ridge covered in green grass, wind blowing their cloaks. Panel 2: Looking out at the vast regenerated landscape of Aryavarta below with ancient sunlit spire cities in the distance. Epic scale, fine G-pen detail, peaceful open horizon. Classic Manga Ink B&W style."
    },
    49: {
        "title": "The people of Aryavarta look up at clear blue unchained sky",
        "panels": 3,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 3 panels. Panel 1: Citizens and refugees in ancient Aryavarta villages stepping out of shelters, smiling in joy. Panel 2: A child holding a glowing flower looking up at the sky. Panel 3: Wide view of the unchained open sky bathed in morning light. Heartwarming emotional resolution, soft ink tones, classic manga style. Classic Manga Ink B&W style."
    },
    50: {
        "title": "Grand Finale Splash Spread: Dawn of the New Free Aryavarta",
        "panels": 1,
        "refs": [
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Aryan_Master_Turnaround.jpg",
            r"D:\antigravity\Yugala Studio\Book_03_The_Broken_Kalpa\05_Reference_Sheets\Character_Turnarounds\Veda_Master_Turnaround.jpg"
        ],
        "prompt": "A Classic Manga Ink (B&W) comic page. 1 Full Page Legendary Finale Splash. Aryan and Veda stand together upon the high green cliff, Aryan planting his resting Kanabo in the rich fertile soil as the morning sun rises across the majestic horizon. Bottom Caption: 'END OF THE KALPA SAGA'. Masterpiece manga ink, iconic finale composition, kakeami crosshatching, zero Japanese text. Classic Manga Ink B&W style."
    }
}

def format_to_2by3(img_path):
    try:
        with Image.open(img_path) as img:
            w, h = img.size
            if abs(w / h - 0.67) > 0.05: # if not 2:3
                crop_w = int(img.height * (2 / 3))
                left = (img.width - crop_w) // 2
                right = left + crop_w
                cropped = img.crop((left, 0, right, img.height))
                resized = cropped.resize((848, 1264), Image.LANCZOS)
                resized.save(img_path, quality=95)
                print(f"[FORMATTED] Converted {os.path.basename(img_path)} to 848x1264 (2:3 aspect ratio)")
            else:
                if w != 848 or h != 1264:
                    resized = img.resize((848, 1264), Image.LANCZOS)
                    resized.save(img_path, quality=95)
                    print(f"[RESIZED] Standardized {os.path.basename(img_path)} to 848x1264")
    except Exception as e:
        print(f"[ERROR formatting {img_path}]: {e}")

def save_and_get_next(completed_page):
    pattern = os.path.join(BRAIN_DIR, f"book03_page{completed_page:02d}_final*")
    matches = glob.glob(pattern)
    if not matches:
        pattern = os.path.join(BRAIN_DIR, f"book03_page{completed_page}_final*")
        matches = glob.glob(pattern)
    
    if matches:
        latest = max(matches, key=os.path.getmtime)
        dest = os.path.join(BASE_DIR, '06_Final_Pages', f"book03_page{completed_page:02d}_final.jpg")
        shutil.copy(latest, dest)
        format_to_2by3(dest) # enforce 2:3 vertical manga dimension
        print(f"[SUCCESS] Saved page {completed_page} image to: {dest}")
    else:
        print(f"[WARNING] Could not find generated image in brain for page {completed_page}")

    queue_path = os.path.join(BASE_DIR, 'generation_queue.json')
    with open(queue_path, 'r', encoding='utf-8') as f:
        queue = json.load(f)

    for item in queue:
        if item.get('page_number') == completed_page:
            item['status'] = 'COMPLETED'
        p = item.get('page_number')
        if p in PAGE_PROMPTS:
            item['title'] = PAGE_PROMPTS[p]['title']
            item['panels'] = PAGE_PROMPTS[p]['panels']
            item['reference_images'] = PAGE_PROMPTS[p]['refs']
            item['prompt'] = PAGE_PROMPTS[p]['prompt']

    with open(queue_path, 'w', encoding='utf-8') as f:
        json.dump(queue, f, indent=2)

    completed_count = sum(1 for item in queue if item.get('status') == 'COMPLETED')
    progress_path = os.path.join(BASE_DIR, '06_Final_Pages', 'Production_Progress.md')
    if os.path.exists(progress_path):
        with open(progress_path, 'r', encoding='utf-8') as f:
            content = f.read()
        content = re.sub(r'Current Progress:\s*\d+/50', f'Current Progress: {completed_count}/50', content)
        page_str = f"Page {completed_page:02d}"
        pattern_row = rf'(\|\s*\*\*{page_str}\*\*\s*\|.*?\|.*?\|)\s*.*?(\s*\|)\s*.*?(\s*\|)'
        replacement_row = rf'\1 **COMPLETED** \2 `book03_page{completed_page:02d}_final.jpg` \3'
        content = re.sub(pattern_row, replacement_row, content)

        with open(progress_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[PROGRESS] Updated dashboard. Completed: {completed_count}/50")

    next_page = completed_page + 1
    if next_page <= 50:
        info = PAGE_PROMPTS.get(next_page, {})
        print(f"=== NEXT PAGE TO GENERATE: PAGE {next_page} ===")
        print(json.dumps({
            'page_number': next_page,
            'image_name': f"book03_page{next_page:02d}_final",
            'AspectRatio': "2:3",
            'refs': info.get('refs', []),
            'prompt': info.get('prompt', '')
        }, indent=2))
    else:
        print("=== ALL 50 PAGES COMPLETED! ===")

if __name__ == '__main__':
    import sys
    completed = int(sys.argv[1]) if len(sys.argv) > 1 else 30
    save_and_get_next(completed)
