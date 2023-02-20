package entity;
import javax.persistence.*;

@Entity(name="public.department")
@Table(name="department",schema = "public")
public class Department {

    @Id
    @GeneratedValue
    private long id;

    @Column(name="Name",length=50,nullable = false)
    private String name;

    @Column(name="Surname",length = 50,nullable = false)
    private String surname;

    @Column(name="Bolumu",length = 50,nullable = false)
    private String bolum;

    @Column(name="Tecrube",length = 10,nullable = false)
    private int tecrube;

    public Department() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getBolum() {
        return bolum;
    }

    public void setBolum(String bolum) {
        this.bolum = bolum;
    }

    public int getTecrube() {
        return tecrube;
    }

    public void setTecrube(int tecrube) {
        this.tecrube = tecrube;
    }
}








