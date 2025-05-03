const videos = [
  // {
  //   id: 1,
  //   youTubeId: "54BBxX3M_pc",
  //   name: "Prapti Bhatt",
  //   year: "BA in International Culinary Arts",
  // },
  {
    id: 2,
    youTubeId: "S1KmMfWWFdY",
    name: "Janhvi Satardekar",
    year: "TY B.Optometry",
  },
  {
    id: 3,
    youTubeId: "7g5o0FVgDWc",
    name: "Khan Mohd. Inayat",
    year: "TY B.Optometry",
  },
  {
    id: 4,
    youTubeId: "kDaMBDBNU4M",
    name: "Niyati Keni",
    year: "TY B.Optometry",
  },
  {
    id: 5,
    youTubeId: "C_W0LFQu7Aw",
    name: "Pratiksha Kardile",
    year: "SY B.Optometry",
  },
  {
    id: 6,
    youTubeId: "WM7LDjAecfI",
    name: "Atharva Patil",
    year: "SY B.Sc MLT",
  },
  {
    id: 7,
    youTubeId: "d7nryzV1iTs",
    name: "Angela Alexandar",
    year: "SY B.Sc MLT",
  },
  {
    id: 8,
    youTubeId: "YlNoGNNKZNA",
    name: "Khatija Gangrekar",
    year: "TY B.Sc MLT",
  },
  {
    id: 9,
    youTubeId: "BqXRenL_LMg",
    name: "Payal Rathod",
    year: "TY B.Sc MLT",
  },
  {
    id: 10,
    youTubeId: "SZ5MNdY_QYU",
    name: "Sahrish Desai",
    year: "TY B.Sc MLT",
  },
  {
    id: 12,
    youTubeId: "SjBpF8iRVd8",
    name: "Savita Choudhary",
    year: "TY B.Sc MLT",
  },
  {
    id: 13,
    youTubeId: "bnW7z5-q0q8",
    name: "Siddesh Desai",
    year: "TY B.Sc MLT",
  },
  {
    id: 14,
    youTubeId: "vOiv8DXbji0",
    name: "Vishal Mahangade",
    year: "TY B.Sc MLT",
  },
];

let output = videos.map(showData).join("");
let list = document.getElementById("studentsTestiminials");
list.innerHTML = output;

function showData(video) {
  return `
      <div class="flex w-80 flex-col rounded-md bg-white">
        <div class="relative flex aspect-video w-full">
          <lite-youtube videoid="${
            video.youTubeId
          }" class="rounded-md" title="Play: Video">
            <a class="lite-youtube-fallback" href="https://www.youtube.com/watch?v=${
              video.youTubeId
            }"></a>
          </lite-youtube>
        </div>
        <div class="flex flex-col p-4 gap-2">
          <span class="text-sm font-bold">${video.name || "Unknown"}</span>
          <span class="text-xs">${video.year || "Not Available"}</span>
        </div>
      </div>
    `;
}
