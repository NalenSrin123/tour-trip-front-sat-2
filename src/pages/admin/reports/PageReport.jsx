import AdminSidebar from "../../../components/layout/AdminSidebar";
import AdminHeader from "../../../components/layout/AdminHeader";

import { Box, Button, Card, Stack, Typography } from "@mui/material";

import {
  CalendarDays,
  Download,
  DollarSign,
  Ticket,
  ShoppingCart,
  Star,
  ChevronDown,
} from "lucide-react";

const SIDEBAR_WIDTH = 240;

const data = [
  { day: "1st", revenue: 1800, bookings: 1300 },
  { day: "4th", revenue: 1500, bookings: 2000 },
  { day: "7th", revenue: 2300, bookings: 1800 },
  { day: "10th", revenue: 2000, bookings: 2500 },
  { day: "13th", revenue: 2800, bookings: 1900 },
  { day: "16th", revenue: 3500, bookings: 2600 },
  { day: "19th", revenue: 3000, bookings: 2200 },
  { day: "22nd", revenue: 3800, bookings: 3900 },
  { day: "25th", revenue: 4000, bookings: 3200 },
  { day: "28th", revenue: 3300, bookings: 4200 },
];

const categories = [
  ["Adventure", 42, "#3974E8"],
  ["Cultural", 28, "#9965E8"],
  ["Food & Wine", 18, "#168B69"],
  ["Nature", 12, "#1761D5"],
];

const guides = [
  ["Sarah Jenkins", "42", "4.9", "Active", "SJ"],
  ["Michael Chang", "38", "4.8", "Active", "MC"],
  ["Elena Rodriguez", "31", "4.7", "On Leave", "ER"],
];

function StatCard({ title, value, icon, change, negative }) {
  const Icon = icon;

  return (
    <Card
      elevation={0}
      sx={{
        p: 1.8,
        border: "1px solid #E7EAF1",
        borderRadius: 2,
      }}
    >
      <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction="row"  >
        <Typography
          sx={{
            fontSize: 8,
            fontWeight: 700,
            color: "#626A7B",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 1,
            backgroundColor: "#EDF2FF",
            color: "#3267D6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={16} />
        </Box>
      </Stack>

      <Typography
        sx={{
          mt: 0.7,
          fontSize: 18,
          fontWeight: 700,
          color: "#1C2639",
        }}
      >
        {value}
      </Typography>

      <Stack direction="row" spacing={0.7}  sx={{alignItems: "center",  mt: 0.8 }}>
        <Box
          sx={{
            px: 0.6,
            py: 0.2,
            borderRadius: 2,
            fontSize: 8,
            fontWeight: 600,
            color: negative ? "#E04B4B" : "#00845A",
            backgroundColor: negative ? "#FFE7E7" : "#DDF7ED",
          }}
        >
          {change}
        </Box>

        <Typography
          sx={{
            fontSize: 8,
            color: "#7B8290",
          }}
        >
          vs last month
        </Typography>
      </Stack>
    </Card>
  );
}

export default function ReportsAnalytics() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F7F8FC",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <AdminSidebar />

      {/* =====================================================
          HEADER

          AdminHeader now owns its own width.
          DO NOT wrap it inside another Box.
      ====================================================== */}

      <AdminHeader />

      {/* =====================================================
          MAIN AREA

          Sidebar = 240px
      ====================================================== */}

      <Box
        component="main"
        sx={{
          ml: {
            xs: 0,
            md: `${SIDEBAR_WIDTH}px`,
          },

          width: {
            xs: "100%",
            md: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          },

          minHeight: "100vh",

          boxSizing: "border-box",

          overflowX: "hidden",

          // Space for fixed header
          pt: "64px",
        }}
      >
        {/* ===================================================
            PAGE CONTENT
        ==================================================== */}

        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            p: {
              xs: 1.5,
              sm: 2,
              md: 3,
            },
            overflowX: "hidden",
          }}
        >
          {/* Header */}

          <Stack sx={{ justifyContent: "space-between", alignItems: {
              xs: "flex-start",
              md: "center",
            }, mb: 2.5 }}
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={2}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: 24,
                    md: 28,
                  },
                  fontWeight: 700,
                }}
              >
                Reports & Analytics
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 13,
                  color: "#687083",
                }}
              >
                Performance overview and operational metrics.
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                width: {
                  xs: "100%",
                  md: "auto",
                },
              }}
            >
              <Button
                startIcon={<CalendarDays size={14} />}
                endIcon={<ChevronDown size={14} />}
                sx={{
                  flex: {
                    xs: 1,
                    md: "unset",
                  },
                  height: 35,
                  px: 1.5,
                  border: "1px solid #DCE1EB",
                  borderRadius: 1,
                  backgroundColor: "white",
                  color: "#364052",
                  fontSize: 10,
                  textTransform: "none",
                }}
              >
                Last 30 Days
              </Button>

              <Button
                variant="contained"
                startIcon={<Download size={14} />}
                sx={{
                  height: 35,
                  px: 1.5,
                  backgroundColor: "#2563DF",
                  boxShadow: "none",
                  fontSize: 10,
                  textTransform: "none",
                }}
              >
                Export
              </Button>
            </Stack>
          </Stack>

          {/* Statistics */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <StatCard
              title="TOTAL REVENUE"
              value="$124,500"
              icon={DollarSign}
              change="↗ +14.5%"
            />

            <StatCard
              title="TOTAL BOOKINGS"
              value="1,284"
              icon={Ticket}
              change="↗ +8.2%"
            />

            <StatCard
              title="AVG. ORDER VALUE"
              value="$96.96"
              icon={ShoppingCart}
              change="↘ -2.1%"
              negative
            />

            <StatCard
              title="CUSTOMER SAT."
              value="4.8/5"
              icon={Star}
              change="↗ +0.2"
            />
          </Box>

          {/* Revenue Chart */}

          <Card
            elevation={0}
            sx={{
              p: {
                xs: 1.5,
                md: 2,
              },
              mb: 2.5,
              border: "1px solid #E7EAF1",
              borderRadius: 2,
            }}
          >
            <Stack sx={{ justifyContent: "space-between" }}
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Revenue vs. Bookings
                </Typography>

                <Typography
                  sx={{
                    mt: 0.4,
                    fontSize: 9,
                    color: "#7B8290",
                  }}
                >
                  Daily performance over the selected period.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.5}>
                <Legend color="#386EE5" text="Revenue" />
                <Legend color="#A579ED" text="Bookings" />
              </Stack>
            </Stack>

            {/* Chart */}

            <Box
              sx={{
                height: 230,
                mt: 2,
                display: "flex",
                overflowX: "auto",
              }}
            >
              {/* Y Axis */}

              <Stack
                sx={{justifyContent: "space-between", alignItems: "flex-end", 
                  width: 35,
                  pb: 3,
                  flexShrink: 0,
                }}
              >
                {["$5K", "$4K", "$3K", "$2K", "$1K", "$0"].map((value) => (
                  <Typography
                    key={value}
                    sx={{
                      fontSize: 8,
                      color: "#737B8C",
                    }}
                  >
                    {value}
                  </Typography>
                ))}
              </Stack>

              {/* Chart */}

              <Box
                sx={{
                  flex: 1,
                  minWidth: {
                    xs: 600,
                    md: 0,
                  },
                  position: "relative",
                }}
              >
                {/* Grid */}

                <Stack
                  sx={{justifyContent: "space-between", 
                    position: "absolute",
                    inset: "0 0 28px",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((line) => (
                    <Box
                      key={line}
                      sx={{
                        borderTop: "1px dashed #EDF0F5",
                      }}
                    />
                  ))}
                </Stack>

                {/* Bars */}

                <Stack
                  direction="row"
                  sx={{justifyContent: "space-around", alignItems: "flex-end", 
                    position: "absolute",
                    inset: 0,
                    pb: 0,
                  }}
                >
                  {data.map((item) => (
                    <Stack
                      key={item.day}
                      sx={{alignItems: "center", justifyContent: "flex-end", 
                        height: "100%",
                        minWidth: 35,
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{alignItems: "flex-end", gap: "2px", 
                          height: "calc(100% - 25px)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 5,
                            height: `${item.revenue / 50}px`,
                            minHeight: 2,
                            borderRadius: "2px 2px 0 0",
                            backgroundColor: "#4B7BEA",
                          }}
                        />

                        <Box
                          sx={{
                            width: 5,
                            height: `${item.bookings / 50}px`,
                            minHeight: 2,
                            borderRadius: "2px 2px 0 0",
                            backgroundColor: "#B28AED",
                          }}
                        />
                      </Stack>

                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: 8,
                          color: "#6D7585",
                        }}
                      >
                        {item.day}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Card>

          {/* Bottom */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "31% 69%",
              },
              gap: 1.5,
            }}
          >
            {/* Categories */}

            <Card
              elevation={0}
              sx={{
                p: 2,
                border: "1px solid #E7EAF1",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Popular Categories
              </Typography>

              <Stack sx={{ mt: 2.5 }} spacing={1.8} >
                {categories.map(([name, percentage, color]) => (
                  <Box key={name}>
                    <Stack sx={{ justifyContent: "space-between", mb: 0.5 }}
                      direction="row"
                    >
                      <Typography
                        sx={{
                          fontSize: 9,
                          color: "#374151",
                        }}
                      >
                        {name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 9,
                          color: "#374151",
                        }}
                      >
                        {percentage}%
                      </Typography>
                    </Stack>

                    <Box
                      sx={{
                        height: 4,
                        borderRadius: 10,
                        backgroundColor: "#E9EDF7",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${percentage}%`,
                          height: "100%",
                          backgroundColor: color,
                          borderRadius: 10,
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Card>

            {/* Guides */}

            <Card
              elevation={0}
              sx={{
                border: "1px solid #E7EAF1",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Stack
                direction="row"
                sx={{justifyContent: "space-between", alignItems: "center", 
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid #EDF0F5",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Top Performing Guides
                </Typography>

                <Button
                  sx={{
                    fontSize: 9,
                    color: "#2462DB",
                    textTransform: "none",
                  }}
                >
                  View All →
                </Button>
              </Stack>

              <Box sx={{ overflowX: "auto" }}>
                <Box sx={{ minWidth: 500 }}>
                  {/* Table Header */}

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr",
                      px: 2,
                      py: 1,
                      backgroundColor: "#FAFBFE",
                    }}
                  >
                    {["GUIDE", "TOURS LED", "RATING", "STATUS"].map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          fontSize: 8,
                          fontWeight: 700,
                          color: "#596173",
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>

                  {/* Rows */}

                  {guides.map(([name, tours, rating, status, avatar]) => (
                    <Box
                      key={name}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        alignItems: "center",
                        px: 2,
                        py: 1,
                        borderTop: "1px solid #EDF0F5",
                      }}
                    >
                      <Stack sx={{ alignItems: "center" }} direction="row"  spacing={1}>
                        <Box
                          sx={{
                            width: 25,
                            height: 25,
                            borderRadius: "50%",
                            backgroundColor: "#E8EDF8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 8,
                            color: "#566174",
                            fontWeight: 600,
                          }}
                        >
                          {avatar}
                        </Box>

                        <Typography
                          sx={{
                            fontSize: 9,
                            color: "#3F4757",
                          }}
                        >
                          {name}
                        </Typography>
                      </Stack>

                      <Typography
                        sx={{
                          fontSize: 9,
                        }}
                      >
                        {tours}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 9,
                          color: "#EF9B13",
                        }}
                      >
                        ★ {rating}
                      </Typography>

                      <Box>
                        <Typography
                          sx={{
                            display: "inline-block",
                            px: 1,
                            py: 0.4,
                            borderRadius: 10,
                            fontSize: 8,
                            backgroundColor:
                              status === "Active" ? "#D9F7EB" : "#DCE4F7",
                            color: status === "Active" ? "#078258" : "#52658E",
                          }}
                        >
                          {status}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Legend({ color, text }) {
  return (
    <Stack sx={{ alignItems: "center" }} direction="row" spacing={0.5} >
      <Box
        sx={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />

      <Typography
        sx={{
          fontSize: 9,
          color: "#5E6677",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}
