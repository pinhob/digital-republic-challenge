export const formatWallsDataToApiFormat = (data) => ({
  walls: [
    {
      height: data.wall_1_height,
      width: data.wall_1_width,
      doors: data.wall_1_doors,
      windows: data.wall_1_windows,
    },
    {
      height: data.wall_2_height,
      width: data.wall_2_width,
      doors: data.wall_2_doors,
      windows: data.wall_2_windows,
    },
    {
      height: data.wall_3_height,
      width: data.wall_3_width,
      doors: data.wall_3_doors,
      windows: data.wall_3_windows,
    },
    {
      height: data.wall_4_height,
      width: data.wall_4_width,
      doors: data.wall_4_doors,
      windows: data.wall_4_windows,
    }
  ]
});
