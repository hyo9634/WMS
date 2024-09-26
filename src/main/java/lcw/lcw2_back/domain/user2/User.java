package lcw.lcw2_back.domain.user2;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@ToString
@AllArgsConstructor
public class User {
    private int storageId;

    private String userName;

    private LocalDate userBirth;

    private String userEmail;

    private String userContact;

    private LocalDateTime regDate;

    private LocalDateTime modDate;

}
