# CS Teaching: The Section Website
Template for CS198 teaching section websites, e.g., for CS106A/B/AX, other intro CS courses taught with sections such as CS107. Each website repo is equipped with a `section.js` file that a section leader can load their slides links + materials into, and the HTMl file for stylization to create a friendly vibe for students visiting the website :D

🌱 The first website deployed with this template is currently up at:
```
https://stanford.edu/~bbyan/cs106ax/
```

If you want to set this up on your own site, i.e. `stanford.edu/~[SUNET]`, you can log into the Myth machines via `ssh [SUNET]@myth.stanford.edu` in the Terminal. In your home directory, there's a built-in `WWW` folder that gets instantly beamed to your Stanford website domain! From there, you can clone the repository as follows:

```
bbymonster@myth53: cd WWW
bbymonster@myth53: git clone https://github.com/yanbenjamin/cs-section-website.git cs106ax
```

thereby creating a subdomain `cs106ax` (or the class that you're TAing that quarter) that students can access yay!
