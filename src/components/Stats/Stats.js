import StatsItem from "./StatItem";

const Stats = () => {
  return (
    <section>
      <h2>Trusted by hundreds of millions of users</h2>
      <div>
        <StatsItem title={"Active devices"} value={"320 million"} />

        <StatsItem title={"Number of downloads"} value={"2.5 billion"} />

        <StatsItem title={"Average uptime"} value={"99.99%"} />
      </div>
    </section>
  );
};

export default Stats;
