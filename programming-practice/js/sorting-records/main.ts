import { stringify } from "querystring";
import { createClient, RedisClientType } from "redis";

const records = [
  { id: "1", firstName: "Jason", lastName: "Major", title: "Programmer" },
  { id: "2", firstName: "Ralph", lastName: "Johnson", title: "Programmer" },
  { id: "3", firstName: "Matt", lastName: "Ranch", title: "Manager" },
  { id: "4", firstName: "Joe", lastName: "Kaut", title: "Construction" },
];

async function seedData(client: any) {
  records.forEach((r) => client.set(r.id, JSON.stringify(r)));
}

async function createRedisClient() {
  const client = createClient();
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  return client;
}

async function main() {
  const client = await createRedisClient();

  await seedData(client);

  console.log("Retrieving ID 2");
  const value = await client.get("2");

  console.log(`ID 1 has this value ${value}`);

  console.log(sortRecords());

  client.quit();
}

function sortRecords() {
  return records.sort((a, b) => {
    if (a.lastName === b.lastName) {
      return 0;
    } else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });
}

main();
