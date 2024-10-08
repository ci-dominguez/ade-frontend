import NavLinkButton from '../../components/Navigation/NavLinkButton';
import ProcessCard from '../../components/ProcessCard';
import VideoHero from '../../components/VideoHero';
import PageLayout from '../../layouts/PageLayout';

const Approach = () => {
  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/approach-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/approach-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/approach-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/approach-hero-poster.webp`;

  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul_italic text-primary mt-20 px-6">
          Thriving On Excitement
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman text-center">
        <h2 className="text-4xl font-editorial_ul text-center">
          We Play Match-Maker
        </h2>
        <div className="pt-4 space-y-4">
          <p>
            Ade has crafted a collection of dream homes, and it&apos;s time for
            you to find your perfect match.
          </p>
          <p>
            Meet our charming lineup of homes, or work with us to create your
            perfect multi-generational household.
          </p>
          <NavLinkButton
            className="text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content mt-8"
            text="Find My Dream Home"
            bgClasses="bg-content"
            arrowClasses="stroke-content group-hover:stroke-primary"
            to="/homes"
          />
        </div>

        <div className="grid cols-2 pt-8 gap-x-8">
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/mm-1.webp"
            alt="Beautiful home in San Diego made by Ade San Diego Home Builders"
            className="col-span-1 rounded-xl h-[170px] object-cover mt-8"
          />
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/mm-3.webp"
            alt="Scenic view of San Diego. Ade San Diego Home Builders"
            className="col-span-1 rounded-xl h-[170px] object-cover"
          />
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/mm-2.webp"
            alt="Beautiful community in San Diego. Ade San Diego Home Builders"
            className="col-span-2 mx-auto rounded-lg max-w-[200px] mt-8"
          />
        </div>
      </section>

      <section className="bg-leafs bg-cover font-haas_roman bg-center h-full text-primary px-6 py-20">
        <h2 className="text-4xl font-editorial_ul text-center">
          Fortify What&apos;s Good About{' '}
          <span className="font-editorial_ul_italic text-accent">Life</span>
        </h2>
        <div className="pt-8 space-y-4">
          <p>
            Finding the missing key to your home can shift your world from the
            inside out.
          </p>
          <p>
            We understand that building a home is a deeply personal journey. Our
            custom home building process is designed to be collaborative and
            client-focused, ensuring that every detail aligns with your vision.
            From the initial consultation to the final walkthrough, our team of
            expert builders and designers work closely with you to create a home
            that is uniquely yours.
          </p>
        </div>
        <NavLinkButton
          className="text-primary hover:text-content border-primary hover:border-accent active:border-accent hover:bg-accent active:bg-accent mt-8"
          text="Learn More"
          bgClasses="bg-accent"
          arrowClasses="stroke-primary group-hover:stroke-content"
          to="/approach"
        />

        <div className="grid grid-cols-1 gap-y-8 pt-10">
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/approach-people-poster.webp"
            alt="Family in San Diego, California. Shot By Ade Home Builders in San Diego"
            className="col-span-1 rounded-lg max-h-[200px] w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-20 font-haas_roman text-center">
        <h2 className="text-4xl font-editorial_ul text-center">
          Here&apos;s How We Do It At Ade
        </h2>

        <p className="pt-8">
          Give us call, drop by our offices, or send us a message, whatever
          works best for you.
        </p>

        <h3 className="text-3xl font-editorial_ul pt-20 text-left">
          The Pregame
        </h3>
        <div className="pt-4 space-y-4 text-left">
          <p>
            We understand that building a home is a deeply personal journey. Our
            custom home building process is designed to be collaborative and
            client-focused, ensuring that every detail aligns with your vision.
            From the initial consultation to the final walkthrough, our team of
            expert builders and designers work closely with you to create a home
            that is uniquely yours.
          </p>
          <p>
            We start with a comprehensive planning phase where we discuss your
            preferences, lifestyle, and budget. Our architects and designers
            then craft detailed plans that incorporate your ideas while
            optimizing for functionality and aesthetics.
          </p>
        </div>

        <h3 className="text-3xl font-editorial_ul pt-20 text-left">
          Game Time
        </h3>

        <p className="pt-4 text-left">
          Throughout the construction phase, we maintain open communication,
          providing regular updates and addressing any concerns promptly. The
          result is a custom-built home that reflects your personality and meets
          your exact specifications.
        </p>

        <h3 className="text-3xl font-editorial_ul pt-20 text-left">
          A Deeper Dive Into Our Process
        </h3>
        <div className="grid grid-cols-1 mt-8 space-y-12">
          <ProcessCard
            title="1"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-1.webp"
          >
            <p>
              During your initial home appointment with Ade, we actively listen
              to understand your overall desires and requirements for your
              custom home project. We assess your current environment and
              explore how to integrate new design elements and spaces. We
              encourage you to share your ideas, provide design suggestions, and
              identify what is most important for your new space&apos;s
              functionality.
            </p>
            <p>
              We also discuss the overall project budget, ensuring our designs
              align with your financial expectations, creating modern homes that
              capture the charm of San Diego living.
            </p>
          </ProcessCard>

          <ProcessCard
            title="2"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-2.webp"
          >
            <p>
              To begin the design process, Ade measures the existing structure
              and our home design architects and residential designers review
              property conditions.
            </p>
            <p>
              The scope of work determines if the comprehensive plan requires
              either structural design or space design or a combination of both.
              At the next meeting, Ade presents designs and plans for your
              approval.
            </p>
          </ProcessCard>

          <ProcessCard
            title="3"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-3.webp"
          >
            <p>
              Ade prepares a comprehensive scope of work from the designs you
              have approved. This includes a detailed description of each step
              of the construction process, from concrete to framing to
              electrical.
            </p>
            <p>
              We review this with you to assure that all previous discussions
              with our remodeling contractors are included in this document.
              This scope of work clearly describes what is and is not included
              in the project, providing a clear understanding of expectations.
            </p>
          </ProcessCard>

          <ProcessCard
            title="4"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-4.webp"
          >
            <p>
              Next, Ade prepares a construction agreement and a written review
              of any structural designs and required engineering that will be
              submitted to the City or County. Depending on the complexity of
              the project, this step can take between one week and three months.
            </p>
          </ProcessCard>

          <ProcessCard
            title="5"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-5.webp"
          >
            <p>
              At this point we finalize the details, such as materials and
              appliance choices. This is when the fun starts! An Ade home
              designer works with you one-on-one to help you with selections:
              from countertop colors to tile backsplash patterns to the design
              of fixtures and cabinetry handles.
            </p>
            <p>
              Working closely with our designer, you can rest assured that your
              selections are expertly coordinated to enhance your space and
              communicate your unique taste. Specifications and details for all
              choices are gathered in a comprehensive job site plan.
            </p>
          </ProcessCard>

          <ProcessCard
            title="6"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-6.webp"
          >
            <p>
              With plans and permits resolved and materials selected, your
              project begins. Ade&apos;s project director and project manager
              review the entire project to ensure that any unanswered questions
              are addressed. Ade meets with you on the job site to review the
              entire scope of work, walk through the project and discuss how the
              job will be built.
            </p>
            <p>
              At this time, specific details are discussed, such as where
              materials can be stored, how your home will be protected from
              dust, and how to safeguard your pets during the build.
            </p>
          </ProcessCard>

          <ProcessCard
            title="7"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-7.webp"
          >
            <p>
              Ade&apos;s project manager provides a time frame and is always
              available to discuss the overall project. During your project, you
              may also contact Ade&apos;s project director and office at any
              time with questions.
            </p>
            <p>
              Your project director works on a daily basis with the project
              manager and is brought into the construction phase as needed.
              Ade&apos;s goal is to complete work on a daily basis in order to
              move the project along quickly to completion.
            </p>
          </ProcessCard>

          <ProcessCard
            title="8"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-8.webp"
          >
            <p>
              Prior to completion, you and Ade&apos;s project manager walk
              through the project and record any small items or details that
              need to be altered to ensure you are 100% satisfied with your
              project.
            </p>
          </ProcessCard>

          <ProcessCard
            title="9"
            imgUrl="https://db36hfj0unq27.cloudfront.net/regular-content/process-9.webp"
          >
            <p>
              When your project is complete, you will receive a detailed packet
              of information about our product and service warranty. Ade will
              also ask you to complete a satisfaction survey. We value your
              feedback so that we can continue to identify ways to make our
              remodeling process streamlined, predictable and enjoyable.
            </p>
          </ProcessCard>
        </div>
        {/* <div className="flex flex-col gap-4 pt-8">
          <NavLinkButton
            className="text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content"
            text="View Our Homes"
            bgClasses="bg-content"
            arrowClasses="stroke-content group-hover:stroke-primary"
            to="/homes"
          />
          <NavLinkButton
            className="text-content border-content hover:border-accent active:border-accent"
            text="View Our Services"
            bgClasses="bg-accent"
            arrowClasses="stroke-content"
            to="/services"
          />

          <NavLinkButton
            className="text-content border-content hover:border-accent active:border-accent"
            text="Contact Us"
            bgClasses="bg-accent"
            arrowClasses="stroke-content"
            to="/contact"
          />
        </div> */}
      </section>
    </PageLayout>
  );
};

export default Approach;
