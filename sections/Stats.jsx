"use client";
import React from "react";

function stats() {
  return (
    <section className="section my-20">
      <div className="container mx-auto">
        <ul className="grid-list flex flex-wrap gap-16 justify-center items-center legu h-[300px]">
          <li>
            <div className="stats-card py-[40px] px-[50px] bg-[rgba(29,201,172,0.1)] text-center p-[25px] rounded-[10px]">
              <h3 className="card-title text-[#1dc9ac] text-5xl font-bold legu">
                10k+
              </h3>
              <p className="card-text uppercase text-[#171717] legu">
                Total Courses
              </p>
            </div>
          </li>
          <li>
            <div className="stats-card py-[40px] px-[50px] bg-[#ee4962]/10 text-center p-[25px] rounded-[10px]">
              <h3 className="card-title text-5xl font-bold text-[#ee4962] legu">
                10k+
              </h3>
              <p className="card-text uppercase text-[#171717] legu">
                Total Courses
              </p>
            </div>
          </li>
          <li>
            <div className="stats-card py-[40px] px-[50px] bg-[#8f57ff]/10 text-center p-[25px] rounded-[10px]">
              <h3 className="card-title text-[#8f57ff] text-5xl font-bold legu">
                10k+
              </h3>
              <p className="card-text uppercase text-[#171717] legu">
                Total Courses
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default stats;
